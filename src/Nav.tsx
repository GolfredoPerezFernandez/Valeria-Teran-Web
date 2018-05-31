import RX = require('reactxp');

import _ = require('lodash');


const _styles={

    MenuView: RX.Styles.createViewStyle({
        flex:85,
        justifyContent:'flex-start',
        alignItems:'center',
    }),

    MenuIcono: RX.Styles.createViewStyle({
      height:18,
      width:18,
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 4,
      marginRight:4,
      alignSelf:'stretch'
  }),
  Menu1:RX.Styles.createViewStyle({
      flex:1,
      
      flexDirection:'column',
      backgroundColor:'black'
  }),
  Menu2:RX.Styles.createViewStyle({
    flex:1,
    flexDirection:'column',
    backgroundColor:'white'
}),
  ButtonMenu:RX.Styles.createViewStyle({
      marginTop:24,
  }),
  MenuView2: RX.Styles.createViewStyle({
      flex:15,
      justifyContent:'flex-start',
      alignItems:'center',
  }),
  IconoTwitter: RX.Styles.createViewStyle({
      height:18,
      width:18,
  }),
  IconoInstagram: RX.Styles.createViewStyle({
      height:18,
      width:18,
  }),
  IconoFacebook: RX.Styles.createViewStyle({
      height:18,
      width:18,
  }),
  ButtonTwitter:RX.Styles.createViewStyle({
      marginTop:24,
  }),
  ButtonInstagram:RX.Styles.createViewStyle({
      marginTop:24,
  }),
  ButtonFacebook:RX.Styles.createViewStyle({
      marginTop:24,
  }),
  
}




interface MainPanelProps {
    onPressNavigateMenu: () => void;
    onPressNavigateContact: () => void;
    onPressNavigateProfile: () => void;
    onPressNavigateGallery: () => void;

    onPressNavigateCreatePaint: () => void;
    isToggle: boolean;
    onNavigateBack: () => void;
    changeToggle: (p:boolean) => void;
    
}
interface rotationState{
    isRotating: boolean
}

class Nav extends RX.Component <MainPanelProps,rotationState>{
    private _test3Angle = new RX.Animated.Value(0);
    private _test3Angle2 = new RX.Animated.Value(0);
    private _test3Animation = RX.Styles.createAnimatedTextStyle({
        transform: [{
            rotate: RX.Animated.interpolate(this._test3Angle, [0, 1], ['0deg', '180deg'])
        }]
    });
    private _test3Animation2 = RX.Styles.createAnimatedTextStyle({
        transform: [{
            rotate: RX.Animated.interpolate(this._test3Angle2, [0, 1], ['180deg', '0deg'])
        }]
    });

    constructor(props: MainPanelProps){
        super(props);
     
       
    }
    render(){
        var MenuStyle=this.props.isToggle?_styles.Menu2:_styles.Menu1;
 return(
    
        <RX.View style={MenuStyle} key='Menu'>
        
         <RX.View style={_styles.MenuView} key='Menu1'>
        {this.props.isToggle ? 
        <RX.Button style={_styles.ButtonMenu}  onPress={this._onPressBack}>
         <RX.Animated.Image source={'./src/assets/img/Menu2.png'} style={[_styles.MenuIcono,this._test3Animation2]}>
         </RX.Animated.Image>
         </RX.Button>
         :
     
         <RX.Button style={_styles.ButtonMenu}  onPress={this._onPressNavigate}>
         
         <RX.Animated.Image source={'./src/assets/img/Menu.png'} style={[_styles.MenuIcono,this._test3Animation]}>
         </RX.Animated.Image>
         </RX.Button>
         }
         </RX.View> 
         {this.props.isToggle? null:(
        <RX.View style={_styles.MenuView2} key='Menu2'>
         <RX.Button style={_styles.ButtonTwitter}>
         <RX.Image source={'./src/assets/img/Logotwitter.png'} style={_styles.IconoTwitter}>
         </RX.Image>
         </RX.Button>
         <RX.Button style={_styles.ButtonInstagram}>
         <RX.Image source={'./src/assets/img/LogoInstagram.png'} style={_styles.IconoInstagram}>
         </RX.Image>
         </RX.Button>
         <RX.Button style={_styles.ButtonTwitter}>
         <RX.Image source={'./src/assets/img/LogoFacebook.png'} style={_styles.IconoTwitter}>
         </RX.Image>
         </RX.Button>
         <RX.Button onPress={this._onPressNavigateCreatePaint}>
             x
             </RX.Button>
         </RX.View>
         )}

        </RX.View> 
        )
    } 

    private _onPressBack = () => {   
        this.setState({ isRotating: true });     
      
          this.props.changeToggle(false)
         this.props.onNavigateBack();
           
         let animation = RX.Animated.timing(this._test3Angle2, {
            toValue: 1,
            duration: 420,
            easing: RX.Animated.Easing.Linear(),
            delay: 0,
              });
        animation.start();
        _.delay(() => {
            animation.stop();
            this._test3Angle2.setValue(0);
            if (this.props.isToggle) {
                this.setState({ isRotating: false });
            }
        }, 600);
        }
    private _onPressNavigate=()=>{
        this.setState({ isRotating: true });
        
        this.props.onPressNavigateMenu();
        let animation = RX.Animated.timing(this._test3Angle, {
            toValue: 1,
            duration: 420,
            easing: RX.Animated.Easing.Linear(),
            delay: 0,
              });
              

        
        animation.start();
        _.delay(() => {
            animation.stop();
            this._test3Angle.setValue(0);
            if (this.props.isToggle) {
                this.setState({ isRotating: false });
            }
        }, 600);
        
    }

    private _onPressNavigateCreatePaint=()=>{
          
        this.props.onPressNavigateCreatePaint();
                        
    }
}

export= Nav;