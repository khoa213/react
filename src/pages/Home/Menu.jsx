const Menu = ({imageSource,menuOption}) => {
    return <>
        <div style={{
            marginLeft: '5%',
            marginTop: '10px'
        }}><img src={imageSource} alt="" style={{
            marginRight: '10px'
        }}/><span style={{
            fontSize: '16px'
        }}>{menuOption}</span></div>
    </>
}
export {Menu};