import RX=require('reactxp');

const _styles={
    BigBox: RX.Styles.createViewStyle({
        flex:1,
        backgroundColor:'white',
       justifyContent:'center',
       alignItems:'center',

    }),
    Text:RX.Styles.createTextStyle({
     
        fontFamily: 'Bintar',
        fontSize:55,
   }),
   
   TextContact:RX.Styles.createTextStyle({
    marginBottom:15,
}),


TextGallery:RX.Styles.createTextStyle({
   marginTop:15,
}),
}


interface ToggleProps{
    isToggle: boolean;
    changeToggle: (p:boolean) => void;
    onPressNavigateProfile:()=>void;
    onPressNavigateGallery:()=>void;
    onPressNavigateContact:()=>void;
}

class Menu extends RX.Component <ToggleProps,{}>{
    
    componentDidMount(){
        this.props.changeToggle(true)
    }
  componentWillUnmount(){
      this.props.changeToggle(false)
  }
    render(){
        return(
            <RX.View style={_styles.BigBox}>
            <RX.Button  onPress={this._NavigateContact}>
                    <RX.Text style={[_styles.Text,_styles.TextContact]}>
                Contact
                </RX.Text>
         </RX.Button>
         <RX.Button  onPress={this._NavigateProfile}>
                    <RX.Text style={[_styles.Text]}>
                Profile
                </RX.Text>
                </RX.Button>
                <RX.Button  onPress={this._onNavigateGallery}>

                <RX.Text  style={[_styles.Text,_styles.TextGallery]}>
                Gallery
                </RX.Text>
                </RX.Button>

                </RX.View>
        )
    }
   private _NavigateContact=()=>{
       this.props.onPressNavigateContact();
   }
   private _NavigateProfile=()=>{
    this.props.onPressNavigateProfile();
}
private _onNavigateGallery=()=>{
    
    this.props.onPressNavigateGallery();
}
}
export=Menu;