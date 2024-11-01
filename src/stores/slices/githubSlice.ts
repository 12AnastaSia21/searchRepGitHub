import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
}

interface GitHubState {
  repositories: Repo[];
  loading: boolean;
  error: string | null;
  selectedRepo: Repo | null;
}

const initialState: GitHubState = {
  repositories: [],
  loading: false,
  error: null,
  selectedRepo: null,
};

export const fetchRepositories = createAsyncThunk(
  'github/fetchRepositories',
  async (query: string) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    return response.data.items;
  }
);

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    selectRepo(state, action) {
      state.selectedRepo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.repositories = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch repositories';
      });
  },
});

export const { selectRepo } = githubSlice.actions;
export default githubSlice.reducer;
