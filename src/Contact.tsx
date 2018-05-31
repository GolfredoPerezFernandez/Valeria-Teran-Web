import RX = require('reactxp');

const _styles={
    BigBox: RX.Styles.createViewStyle({
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    }),
    Box1: RX.Styles.createViewStyle({
        flex: 60,        
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:40,
    }),
    Box2: RX.Styles.createViewStyle({
        flex: 40,        
        justifyContent:'center',
        alignItems:'center',
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
    Contact: RX.Styles.createViewStyle({
        height:480,
        width:350,
        backgroundColor:'white',
        flex:1,
       justifyContent:'flex-start',
       alignItems:'flex-start',
       marginLeft:-100,
       paddingLeft:20,
      }),
      TituloContact: RX.Styles.createTextStyle({
         fontSize:34,
        fontFamily: 'JennaSue',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
      }),
      Texto: RX.Styles.createTextStyle({
        fontSize:24,
       fontFamily: 'JennaSue',
       marginTop:10,
     }),
     input: RX.Styles.createTextInputStyle({
        fontSize:24,
       fontFamily: 'JennaSue',
       width:300,
     }),
     inputMensaje: RX.Styles.createTextInputStyle({
        fontSize:16,
       fontFamily: 'JennaSue',
       height: 100,
       width:300,
      
     }),
     Titulo: RX.Styles.createTextStyle({
        fontSize:40,
       fontFamily: 'MMAchamp',
        marginLeft:-300,   
     }),
     border: RX.Styles.createViewStyle({
         borderColor:'black',
         borderBottomWidth:1,
         marginBottom: 15,

     }),
       borderMessage: RX.Styles.createViewStyle({
        borderColor:'black',
        borderWidth:1,
    }),
   
    SendButton: RX.Styles.createImageStyle({
       height:50,
       width:50,
      }),
    ButtonView: RX.Styles.createViewStyle({
        marginBottom: 20,
        alignSelf:'flex-end',
        marginTop:30,
        marginRight:20,
      }),
   
    }

    interface navProp{
        changeToggle:(p:boolean)=>void;
    }

    

class Contact extends RX.Component <navProp,{}>{
    componentDidMount(){
        this.props.changeToggle(false);
    }
render(){
    return(
       
        <RX.View style={_styles.BigBox} >
   
                <RX.View style={_styles.Box1} >
                <RX.Text style={_styles.Titulo}>
                    Contact
                    </RX.Text>
                       <RX.Image style={_styles.Pintura} source={'./src/assets/img/Pintura.png'}>
                            </RX.Image>
                            <RX.View style={_styles.Cuadro}>
                                <RX.Text  style={_styles.TituloCuadro}>
                                        Nenufares

                                </RX.Text  >
                                <RX.Text style={_styles.TextoCuadro} >
                                        Lorem ipsum es el texto que se usa habitualmente en           
                                </RX.Text>
                                <RX.Text  style={_styles.TextoCuadro}>
                                        de tipografías o de borradores de diseño para probar 
                                </RX.Text>
                                <RX.Text  style={_styles.TextoCuadro}>
                                        diseño visual antes de insertar el texto final.
                                </RX.Text>
                            </RX.View>
                </RX.View>  

                <RX.View style={_styles.Box2} key='Box2'>
                            <RX.View style={_styles.Contact}>
                            <RX.Text style={_styles.TituloContact}>
                            Send me a message
                                </RX.Text>
                                <RX.Text style={_styles.Texto}>
                               Full Name
                                </RX.Text>
                                <RX.View style={_styles.border}>

                                <RX.TextInput style={_styles.input}>
                             
                                </RX.TextInput>
                                </RX.View>

                                <RX.Text style={_styles.Texto}>
                                Email Address
                                </RX.Text>
                                <RX.View style={_styles.border}>
                                <RX.TextInput style={_styles.input}>
                             
                                </RX.TextInput>
                                </RX.View>
                                  <RX.Text style={_styles.Texto}>
                                Message
                                </RX.Text>
                                <RX.View style={_styles.borderMessage}>

                                <RX.TextInput multiline={true} style={_styles.inputMensaje}>
                             
                                </RX.TextInput>
                                </RX.View>
                                <RX.View style={_styles.ButtonView}>
                                <RX.Button  onPress={ this._onPressSendEmail }>
                                    <RX.Image style={_styles.SendButton} source={'./src/assets/img/SendButton.png'}>
                                        </RX.Image>
                                    </RX.Button>
                                
                                    </RX.View>

                            </RX.View>
                </RX.View>

        </RX.View>
    )
}

private _onPressSendEmail=()=>{

}
}
export = Contact;