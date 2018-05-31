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
    changeToggle: (p:boolean) => void;
    
    onPressNavigatePaintings: ()=>void;
    
    onPressNavigateDrawings: ()=>void;
    
    onPressNavigateTextiles: ()=>void;   
}

class Gallery extends RX.Component <ToggleProps,{}>{
  
    componentDidMount(){
        
        this.props.changeToggle(true);

    }
    render(){
       
        return(
            <RX.View style={_styles.BigBox}>
            <RX.Button  onPress={this._onPressNavigatePaintings}>
                <RX.Text style={[_styles.Text,_styles.TextContact]}>
                        Paintings
                </RX.Text>
            </RX.Button>
              
                <RX.Button  onPress={this._onPressNavigateDrawings}>
                <RX.Text style={_styles.Text}>
                        Drawings
                </RX.Text>
                 </RX.Button>
              
                <RX.Button  onPress={this._onPressNavigateTextiles}>
                <RX.Text style={[_styles.Text,_styles.TextGallery]}>
                Textiles
                </RX.Text>
                 </RX.Button>
                </RX.View>

        )
    }
    private _onPressNavigatePaintings=()=>{
        this.props.onPressNavigatePaintings()
    }
    private _onPressNavigateDrawings=()=>{
        this.props.onPressNavigateDrawings()
    }
    private _onPressNavigateTextiles=()=>{
        this.props.onPressNavigateTextiles()
    }
   
}
export=Gallery;