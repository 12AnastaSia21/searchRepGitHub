import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description: string;
  license: {
    name: string;
  } | null;
  owner: {
    login: string;
  };
}

interface GitHubState {
  repositories: Repo[];
  loading: boolean;
  error: string | null;
  selectedRepo: Repo | null;
  topics: string[];
}

const initialState: GitHubState = {
  repositories: [],
  loading: false,
  error: null,
  selectedRepo: null,
  topics: [],
};

export const fetchRepositories = createAsyncThunk<Repo[], string>(
  'github/fetchRepositories',
  async (query, { dispatch }) => {
    dispatch(selectRepo(null));
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    return response.data.items;
  }
);

// Thunk для получения тем
export const fetchTopics = createAsyncThunk<string[], { owner: string; repo: string }>(
  'github/fetchTopics',
  async ({ owner, repo }) => {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/topics`, {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
    });
    return response.data.names;
  }
);

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    selectRepo(state, action: PayloadAction<Repo | null>) {
      state.selectedRepo = action.payload;
      state.topics = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedRepo = null; 
      })
      .addCase(fetchRepositories.fulfilled, (state, action: PayloadAction<Repo[]>) => {
        state.loading = false;
        state.repositories = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch repositories';
      })
      .addCase(fetchTopics.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.topics = action.payload;
      });
  },
});

export const { selectRepo } = githubSlice.actions;
export default githubSlice.reducer;
