import Background from '../assets/back.png'

const gridStyle = {
    height: '100vh', width: '100%'
}

const parentBox = {
    my: 3,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}


const mainTxtStyle = {
    color: '#ab0202',
    my: 2,
    fontWeight: '500'
}

const submitBtnStyle = {
    px: 3,
    py: 1.5,
    mt: 3,
    mb: 2,
    mx: 'auto',
    display: 'block',
    background: "linear-gradient(45deg,#fb6966, #fca17d)",
    color: '#FFF'
}

const thanksBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'left'
}

const thanksTypo = {
    fontWeight: '500', color: '#343434'
}

const rightBox = {
    position: 'fixed',
    background: '#fb6966',
    height: '100vh',
    width: '50%',
    left: '53%',
    top: 0,
    p: 4
}
export { gridStyle, parentBox, rightBox, mainTxtStyle, submitBtnStyle, thanksBox, thanksTypo }