import RX= require('reactxp')
const {Image} =require('cloudinary-react');

const _styles={
    Cuadros: RX.Styles.createViewStyle({
        width:280,
        height:320,
        backgroundColor:'black',
        marginRight:10,
        marginTop:20,
        alignSelf:'center',
        marginBottom:20,
    }),
    Text: RX.Styles.createTextStyle({
        color:'white'
    })
}

interface ItemInfo{
    title?:String;
    description?: String;
    price?: String;
    imgUrl?:string;
}
interface paintProps{
    paint: ItemInfo;
    changePaint:(p:ItemInfo)=>void;
}

class Paint extends RX.Component <paintProps,{}>{
    render(){
        return(
            <RX.View onMouseEnter={this._changePaint} style={_styles.Cuadros}>
                <Image cloudName={'dwuk3500t'} width="280" height="320" publicId={this.props.paint.imgUrl}/>
               
            </RX.View>
        )
    }
    private _changePaint=()=>{
        this.props.changePaint(this.props.paint)
    }
}

export=Paint;