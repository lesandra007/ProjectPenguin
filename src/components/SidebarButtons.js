import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const SidebarButtons = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Goals",
        icon: <TrackChangesIcon />,
        link: "/goals"
    },
    {
        title: "Questions",
        icon: <QuestionAnswerIcon />,
        link: "/questions"
    },
    {
        title: "Hackings",
        icon: <CodeIcon />,
        link: "/hackings"
    },
    {
        title: "Shop",
        icon: <ShoppingCartIcon />,
        link: "/shop"
    }
]