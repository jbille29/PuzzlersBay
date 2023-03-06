import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { IoStatsChart } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsFillGearFill, BsFillQuestionCircleFill } from 'react-icons/bs'

import Modal from '../components/Modal'
import {
GameOneHowTo,
  GameOneSettings,
  GameOneStats,
  GameTwoHowTo,
  GameTwoSettings,
  GameTwoStats,
  GameThreeHowTo,
  GameThreeSettings,
  GameThreeStats,
} from "../components/gameComponents/GameModalContent"

const Layout = () => {

    const [ title, setTitle ] = useState("Puzzler's Bay")
    const [ activeGame, setActiveGame] = useState(null)

    const [ statsContent, setStatsContent ] = useState(<></>)
    const [ howToContent, setHowToContent ] = useState(<></>)
    const [ settingsContent, setSettingsContent ] = useState(<></>)

    const [ modalContent, setModalContent ] = useState(null)
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const configureGame = () => {
    
        switch (activeGame) {
            case "gameOne":
                setStatsContent(<GameOneStats />)
                setHowToContent(<GameOneHowTo />)
                setSettingsContent(<GameOneSettings />)
                setTitle("Game One")
                break;
            case "gameTwo":
                setStatsContent(<GameTwoStats />)
                setHowToContent(<GameTwoHowTo />)
                setSettingsContent(<GameTwoSettings />)
                setTitle("Game Two")
                break;
            case "gameThree":
                setStatsContent(<GameThreeStats />)
                setHowToContent(<GameThreeHowTo />)
                setSettingsContent(<GameThreeSettings />)
                setTitle("Game Three")
                break;
            default:
                setStatsContent(<></>)
                setHowToContent(<></>)
                setSettingsContent(<></>)
                setTitle("Puzzler's Bay")
            }  
    }

    useEffect(()=> {
        configureGame()
    }, [activeGame])

    const handleOpenModal = (content) => {
        setModalContent(content)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            <nav className='nav-top'>
                <div className='nav-top-left'>
                    <RxHamburgerMenu 
                        style={{
                            fontSize: 'x-large',
                            marginRight: '1.5rem',
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <div className='nav-top-center'>
                    <h3>{title}</h3>
                </div>
                <div className='nav-top-right'>
                    <BsFillQuestionCircleFill
                        style={{
                            fontSize: 'x-large',
                            marginRight: '.75rem',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOpenModal(howToContent)}
                    />
                    <IoStatsChart 
                        style={{
                            fontSize: 'x-large',
                            marginRight: '.5rem',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOpenModal(statsContent)}
                    />
                    <BsFillGearFill
                        style={{
                            fontSize: 'x-large',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleOpenModal(settingsContent)}
                    />
                </div>
            </nav>
            <main>
                <nav className='nav-side'>
                    <div>
                        <Link to='/'>Game One</Link>
                    </div>
                    <div>
                        <Link to='gameTwo'>Game Two</Link>
                    </div>
                    <div>
                        <Link to='gameThree'>Game Three</Link>
                    </div>
                </nav>
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        {modalContent}
                    </Modal>
                )}
                <Outlet context={[activeGame, setActiveGame]}/>
            </main>          
        </>
    )
}
export default Layout