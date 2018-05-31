

import RX = require('reactxp');
const {View,Image} =RX;

const styles = {
  
    text: RX.Styles.createTextStyle({
        color:'red',
        fontSize: 36,
        fontWeight:'bold',
        textAlign:'center'
    }),
      Box1: RX.Styles.createViewStyle({
        flex: 47,        
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:80,
    }),
    Box2: RX.Styles.createViewStyle({
        flex: 47,        
        justifyContent:'center',
        alignItems:'center',
    }),
    LogoWindow: RX.Styles.createImageStyle({
        height:130,
        width:340,
    }),
    LogoMobile: RX.Styles.createImageStyle({
        height:120,
        width:200,
    }),    
     Valeria: RX.Styles.createImageStyle({
        height:100,
        width:100
    }),
    BigBox: RX.Styles.createViewStyle({
        flexDirection:'row',
        flex:1
    }),
    Text: RX.Styles.createTextStyle({
        fontFamily: 'JennaSue',
        fontSize:20,
        marginTop:40,
        textAlign:'center',
    }),
    Pintura:RX.Styles.createImageStyle({
        height:400,
        width:400,
    }),
    Cuadro:RX.Styles.createViewStyle({
        width:320,
        backgroundColor:'black',
         height:170,
         paddingTop: 20,
         paddingRight: 20,
         paddingBottom: 20,
         paddingLeft: 20,
         position: 'relative',
         marginTop:-100,
         marginLeft:-100,
         opacity:0.7,
         
    }),
    TextoCuadro: RX.Styles.createTextStyle({
      color: 'white',
      fontSize:18,
       fontFamily:'JennaSue'
    }),
    TituloCuadro: RX.Styles.createTextStyle({
      color: 'white',
      fontSize:30,
      fontFamily: 'Bintar',
      marginBottom: 8,
    }),
    Button: RX.Styles.createTextStyle({
        color: 'black',
         fontFamily:'MMAchamp'
      }),
    Button2: RX.Styles.createTextStyle({
        color: 'white',
        fontFamily:'MMAchamp'
      }),
    ButtonView: RX.Styles.createTextStyle({
        borderColor:'black',
        borderRadius:0,
        borderWidth:2,
        marginBottom: 20,
        paddingTop: 12,
        paddingLeft: 40,
        paddingRight:40,
        paddingBottom:12,
        marginTop:30,
      }),
   
     ButtonView2: RX.Styles.createTextStyle({
        borderColor:'black',
        backgroundColor:'black',
        borderRadius:0,
        borderWidth:2,
        marginBottom: 20,
        paddingTop: 12,
        paddingLeft: 40,
        paddingRight:40,
        paddingBottom:12,
        marginTop:30,
    }),

    profileBox:RX.Styles.createViewStyle({
        flex:1,
    })
};

interface MainPanelProps {
    onPressNavigateGallery: () => void;
    changeToggle:(p:boolean)=>void;
}


interface ButtonHoverState{
    isHover?: boolean;
}



class Profile extends RX.Component<MainPanelProps, ButtonHoverState> {
    constructor(props: MainPanelProps){
        super(props);
        this.state={
            isHover: false,
        }
    }
    componentDidMount(){
        this.props.changeToggle(false)
    }
     render() {
        var ButtonView=this.state.isHover?styles.ButtonView2:styles.ButtonView;
        var ButtonStyle=this.state.isHover?styles.Button2:styles.Button;
        var logoStyle = (RX.UserInterface.measureWindow().width<375) ? 
        styles.LogoMobile : styles.LogoWindow;

        return (
        <View style={styles.profileBox}>
        <Image style={{flex:1}} resizeMode='cover'  source={'./src/assets/img/fondo.png'}>

            <RX.View style={styles.Box1} key='Menu3'>

<RX.Image style={logoStyle} source={'./src/assets/img/LogoValeria.png'}>
</RX.Image>

<RX.Image style={styles.Valeria} source={'./src/assets/img/ImagenValeria.png'}>
</RX.Image>

<RX.View style={styles.Text}>
<RX.Text >
Lorem ipsum es el texto que se usa habitualmente en           
</RX.Text>
<RX.Text >
de tipografías o de borradores de diseño para probar 
</RX.Text>
<RX.Text >
diseño visual antes de insertar el texto final. Aunque no posee 
</RX.Text>
<RX.Text >
de tipografías o de borradores de diseño para probar 
</RX.Text>
<RX.Text >
diseño visual antes de insertar el texto final. Aunque no posee 
</RX.Text>
</RX.View>
<RX.View style={ButtonView} onMouseLeave={this._onChangeHover} onMouseEnter={this._onChangeHover}>
<RX.Button style={ButtonStyle} onPress={ this._onPressNavigateGallery }>
    SEE GALLERY
    </RX.Button>
  
    </RX.View>
       
</RX.View>

<RX.View style={styles.Box2} key='Menu4'>
<RX.Image style={styles.Pintura} source={'./src/assets/img/Pintura.png'}>
</RX.Image>
<RX.View style={styles.Cuadro}>
<RX.Text  style={styles.TituloCuadro}>
Nenufares
</RX.Text  >
<RX.Text style={styles.TextoCuadro} >
Lorem ipsum es el texto que se usa habitualmente en           
</RX.Text>
<RX.Text  style={styles.TextoCuadro}>
de tipografías o de borradores de diseño para probar 
</RX.Text>
<RX.Text  style={styles.TextoCuadro}>
diseño visual antes de insertar el texto final.
</RX.Text>
    </RX.View>

    </RX.View>
            </Image>
            </View>
        );
    }
    
    private _onPressNavigateGallery = () => {
        this.props.onPressNavigateGallery();
    }

    


    private _onChangeHover=()=>{
         this.setState({isHover:!this.state.isHover})
    }

    
}

export = Profile;
