import { colors } from '../../styles/colors';

export const ContainerHeader = {
	// width: '100%',
	background: colors.primary,
	paddingTop: 40,
	paddingBottom: 40
}

// Endereço

export const ContainerFooterItem = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
	margin: '1%',
	width: '30%'
}

export const ContentFooter = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
}

export const FooterIcon = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-start',
	width: '4rem',
	height: '100%',
	// paddingTop: '0.5rem'
}

export const IconFooter = {
	width: '2.5rem',
	height: '2.5rem'
}

export const FooterDescricao = {
	display: 'flex',
	flexDirection: 'column',
	// alignItems: 'center',
	justifyContent: 'flex-start !important',
	color: '#FFFFFF'
}
// Telefone
export const ContainerTelefone = {
	display: 'flex',
	alignItems: 'center'
}

export const ContainerIconTelefone = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '4rem',
	height: '4rem',
	paddingTop: '0.5rem'
}

export const IconTelefone = {
	width: '2rem',
	height: '2rem'
}

export const ContainerDescricaoTelefone = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	// height: '4rem',
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
