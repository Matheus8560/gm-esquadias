import React from 'react';
import { Header } from 'rsuite';

import Nav from '../../components/Nav';

import {
	ContainerHeader,
	ContainerLogo,
	Logo,
} from './styles';

import '../../styles/fonts.css';

import logo from '../../assets/images/logo_nova.png';

const HeaderComponent = ({ activeKey }) => (
	<Header  id="outer-container" style={{...ContainerHeader, marginBottom: 120, width: "100%", position: 'fixed', zIndex: 99999, top: 0, boxShadow: '1px 1px 4px 1px rgba(76,86,82, 0.4)'}}>
		<div xs={12} style={(window.innerWidth < 992) ? {...ContainerLogo, width: '50%'} : {...ContainerLogo, width: '30%'}}>
			<img src={logo} style={Logo} />
		</div>
		<Nav activeKey={activeKey} />
	</Header>

);

export default HeaderComponent;
