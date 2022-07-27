import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyleIcon className='sidebarIcon' />
                        Início
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className='sidebarIcon' />
                        Análises
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon' />
                        Vendas
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcon" />
                        Usuários
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        Produtos
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon" />
                        Transações
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon" />
                        Relatórios
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notificações</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon" />
                        Email
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon" />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon" />
                        Mensagens
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Administração</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        Gerir
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Análises
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon" />
                        Relatórios
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
