import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { RootState } from './stores/store';
import "./TheSidebar.sass";

export default function TheSidebar() {
    const selectedRepo = useSelector((state: RootState) => state.github.selectedRepo);
    const topics = useSelector((state: RootState) => state.github.topics);

    if (!selectedRepo) {
        return (
            <aside className="sidebar-null">
                <Typography style={{ color: '#4F4F4F' }} variant="subtitle1" gutterBottom>
                    Выберите репозиторий
                </Typography>
            </aside>
        );
    }

    const topTopics = topics.slice(0, 4);
    const remainingTopics = topics.slice(4);

    return (
        <aside className="sidebar-container">
            <h2>{selectedRepo.name}</h2>
            <div className="basic-info">
                <Chip label={selectedRepo.language || "Язык"} color="primary" />
                <div className="star-info">
                    <StarIcon className="color-star" />
                    <Typography className="number-of-stars" variant="body2" gutterBottom>
                        {selectedRepo.stargazers_count}
                    </Typography>
                </div>
            </div>
            <div className="info-container">
                <div className="topic-row">
                    {topTopics.map((topic) => (
                        <Chip key={topic} label={topic} />
                    ))}
                </div>
                {remainingTopics.length > 0 && (
                    <div className="topic-row">
                        {remainingTopics.map((topic) => (
                            <Chip key={topic} label={topic} />
                        ))}
                    </div>
                )}
            </div>
            <Typography variant="body2" gutterBottom>
                {selectedRepo.license ? selectedRepo.license.name : "Лицензия отсутствует"}
            </Typography>
        </aside>
    );
}
