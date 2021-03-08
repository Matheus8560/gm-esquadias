import { colors } from '../../styles/colors';

export const ContainerHeader = {
	background: colors.primary,
	paddingTop: 40,
	paddingBottom: 40
}

export const ContentFooter = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'flex-start',
	width: '80%',
	margin: '30px'
}

export const FooterIcon = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-start',
	width: '4rem',
}

export const IconFooter = {
	width: '2.5rem',
	height: '2.5rem'
}

export const FooterDescricao = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-center !important',
	color: '#FFFFFF',
	minWidth: '170px'
}

export const ContainerSocial = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
}

export const IconFacebook = {
	width: '3.5rem',
	height: '3.5rem',
	cursor: 'pointer',
	marginRight: '1%'
}

export const IconInstagram = {
	width: '3.5rem',
	height: '3.5rem',
	cursor: 'pointer'
}

export const BtnWhatsapp = {
	background: 'rgb(37, 211, 102)',
    height: '70px',
    width: '70px',
    position: 'fixed',
	bottom: '40px',
	right: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
	borderRadius: '50%',
	zIndex: 9999999999,
}
