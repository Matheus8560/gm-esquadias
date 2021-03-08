import React from 'react';
import { Nav, Dropdown } from 'rsuite';
import { slide as Menu } from 'react-burger-menu';
import {styles} from './styles'
const NavComponent = ({ activeKey }) => {
	if(window.innerWidth < 992){
		return(
			<>
				<div style={{width: '50%'}}>
					<Menu right  width={ '100%' } styles={ styles } outerContainerId={ "outer-container" }>
						<a id="home" className={(activeKey == 'home') ? "menu-item active" : "menu-item"} href="/">Inicio</a>
						<a id="about" className={(activeKey == 'porta-auto') ? "menu-item active" : "menu-item"} href="/portas-automaticas">Portas Automáticas</a>
						<a id="about" className={(activeKey == 'porta-manual') ? "menu-item active" : "menu-item"} href="/portas-manuais">Portas Manuais</a>
						<a id="about" className={(activeKey == 'manutencao') ? "menu-item active" : "menu-item"} href="/portas-manutencao">Manutenção</a>
						<a id="contact" className={ (activeKey == 'empresa') ? "menu-item active" : "menu-item"} href="/empresa">Empresa</a>
						<a id="contact" className={ (activeKey == 'contato') ? "menu-item active" : "menu-item"} href="/contato">Contato</a>
					</Menu>
				</div>
			</>
		);
	} else {
		return(
			<>
				<div style={{width: '40%',  paddingRight: '5%'}}>
					<Nav style={{width: '100%'}} activeKey={activeKey}>
						<Nav.Item href="/" eventKey="home">Home</Nav.Item>
						<Dropdown title='Serviços' trigger='click'>
							<Dropdown.Item href="/portas-automaticas" eventKey="porta-auto">Portas automáticas</Dropdown.Item>
							<Dropdown.Item href="/portas-manuais" eventKey="porta-manual">Portas manuais</Dropdown.Item>
							<Dropdown.Item href="/portas-manutencao" eventKey="manutencao">Manutenção</Dropdown.Item>
						</Dropdown>
						<Nav.Item href="/empresa" eventKey="empresa">Empresa</Nav.Item>
						<Nav.Item href="/contato" eventKey="contato">Contato</Nav.Item>

					</Nav>
				</div>
			</>
		);
	}


}

export default NavComponent;
