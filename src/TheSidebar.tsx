import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
import "./TheSidebar.sass";

export default function TheSidebar() {
    //Вариант saidebar, когда не выбран репозиторий
    /*return (
        <aside className="sidebar-null">
            <Typography style={{color: '#4F4F4F'}} variant="subtitle1" gutterBottom>Выберите репозиторий</Typography>
        </aside>
    )*/
     return (
     <aside className="sidebar-container">
       <h2>Название проекта</h2>
       <div className="basic-info">
         <Chip label="Язык" color="primary" />
         <div className="star-info">
           <StarIcon className="color-star" />
           <Typography className="number-of-stars" variant="body2" gutterBottom>
             9 800 000
           </Typography>
         </div>
       </div>
       <div className="info-container">
         <Chip label="Технология" />
         <Chip label="технол" />
         <Chip label="тех" />
         <Chip label="Техн" />
       </div>
       <Typography variant="body2" gutterBottom>
         Лицензия
       </Typography>
     </aside>
   );
}
