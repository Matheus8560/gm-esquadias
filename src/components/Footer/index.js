import React from 'react';
import { Footer, FlexboxGrid, Col, Icon  } from 'rsuite';

import {
	ContainerHeader,
	ContentFooter,
	FooterIcon,
	IconFooter,
	FooterDescricao,
	IconFacebook,
	IconInstagram,
	BtnWhatsapp,
} from './styles';

import '../../styles/fonts.css';

import iconLocalizacao from '../../assets/images/localizacao.png'
import iconTelefone from '../../assets/images/contato.png'
import iconFacebook from '../../assets/images/facebook.png'
import iconInstagram from '../../assets/images/instagram.png'

const FoorterComponent = ({ active, onSelect }) => (
	<Footer>
		<FlexboxGrid justify="space-around" align="middle" style={ContainerHeader}>

			<FlexboxGrid.Item componentClass={Col} colspan={20} md={8} style={{justifyContent: 'center', display: 'flex'}}>
				<div style={ContentFooter}>
					<div style={FooterIcon}>
						<img src={iconLocalizacao} style={IconFooter} />
					</div>
					<div style={FooterDescricao}>
						<h3 style={{marginBottom: '10px'}}>Endereço</h3>
						<span>Rua Batista de Oliveira, 195</span>
						<span>Duque de Caxias, RJ</span>
					</div>
				</div>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item componentClass={Col} colspan={20} md={7} style={{justifyContent: 'center', display: 'flex'}}>
				<div style={ContentFooter}>
					<div style={FooterIcon}>
						<img src={iconTelefone} style={IconFooter} />
					</div>
					<div style={FooterDescricao}>
						<h3 style={{marginBottom: '10px'}}>Contato</h3>
						<span>(21) 99016-2015</span>
						<span>(21) 99268-8273</span>
						<span>(21) 99247-2063</span>
					</div>
				</div>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item componentClass={Col} colspan={20} md={7} style={{justifyContent: 'center', display: 'flex'}}>
				<div style={ContentFooter}>
					<div style={{...FooterDescricao, textAlign: 'center'}}>
						<h3 style={{marginBottom: '10px'}}>Redes Sociais:</h3>
						<span style={{marginBottom: '10px'}}>Nos siga nas redes sociais e saiba mais sobre nós.</span>
						<span>
							<img src={iconFacebook} style={IconFacebook} onClick={() => window.location.href='https://facebook.com'}/>
							<img src={iconInstagram} style={IconInstagram} onClick={() => window.location.href='https://instagram.com'} />
						</span>
					</div>
				</div>
			</FlexboxGrid.Item>
		</FlexboxGrid>
		<a onClick={() => window.location.href='https://api.whatsapp.com/send?phone=5521990162015'} style={BtnWhatsapp} className="btn-wpp"><Icon icon="whatsapp" style={{ color: '#FFF', fontSize: '3rem' }} /></a>
	</Footer>
);

export default FoorterComponent;
