import RX= require('reactxp')
import Paint = require('./Paint');
const {Image} =require('cloudinary-react');

import { ComponentBase } from 'resub';
import TodosStore = require('./TodosStore');


import _ = require('lodash');

const _styles={
    BigBox: RX.Styles.createViewStyle({
        flexDirection:'row',
        flex:1,
    }),
    Box1: RX.Styles.createViewStyle({
         justifyContent:'center',
        alignItems:'center',
        flex:50,
        marginLeft:70,
    }),
    Box2: RX.Styles.createViewStyle({
           flex:50,            
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems: 'flex-start',
          width:400,
          flexWrap:'wrap',
          marginLeft:-50,
    }),
    Titulo: RX.Styles.createTextStyle({
        fontSize:55,
       fontFamily: 'Bintar',
        marginLeft:-170,   
     }),
     CuadroDetalle: RX.Styles.createViewStyle({
      backgroundColor:'white',
      width:400,
      height:500,  
      paddingBottom:30,
     }),
     Cuadro: RX.Styles.createImageStyle({
         height:280,
         width:230,
         alignSelf:'center',
         marginTop:50,

     }),
     TitleText: RX.Styles.createTextStyle({
        fontSize:34,
        fontFamily: 'JennaSue',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:12,
        marginLeft:20,
    }),
    TitlePrice: RX.Styles.createTextStyle({
        fontSize:34,
        fontFamily: 'JennaSue',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:12,
        marginRight:20,
       alignSelf:'flex-end',
    }),
    
    Text: RX.Styles.createTextStyle({
        fontSize:20,
      fontFamily: 'JennaSue',
      marginLeft:30,
    }),
    listScroll: RX.Styles.createViewStyle({
        flexDirection: 'column',
        alignSelf: 'stretch',
    }),
    itemCell: RX.Styles.createViewStyle({
        backgroundColor:'black',
        height: 260,
        width:200,
        marginTop:30,
        marginBottom:30,
        justifyContent: 'center'
    }),
    itemText: RX.Styles.createTextStyle({
        fontSize: 15,
        marginHorizontal: 8,
        alignSelf: 'stretch',
        color: '#666'
    }),
    Cuadros: RX.Styles.createViewStyle({
        width:280,
        marginRight:10,
        marginTop:20,
        alignSelf:'center',
        marginBottom:20,
        backgroundColor:'black'
    }),
   
}//
interface PaintListItemInfo  {
    key:string;
    text: string;
    title: string;
    imgUrl: string;
    price:string;
    type:string;
    
}

interface CuadrosState {
    paintList: PaintListItemInfo[];
    paint:PaintListItemInfo;
}

interface navProps{
    changeToggle?:(p:boolean)=>void;
}

class Textiles extends ComponentBase<navProps, CuadrosState> {
    protected _buildState(props: navProps, initialBuild: boolean): CuadrosState {
        return {
            paintList: TodosStore.getTextiles().map((todo, i) => {
                return {
                    key: i.toString(),
                    text: todo.text,
                    title:todo.title,
                    imgUrl:todo.imgUrl,
                    price:todo.price,
                    type:todo.type,
                };
            }),
        paint:{
            key: '',
            text: '',
            title:'',
            imgUrl:'',
            price:'',
            type:'',
        }
        };
    }
    //
    componentDidMount(){
        this.props.changeToggle(false)
    } 
    render(){
        var paints = _.map(this.state.paintList, paint => {
            return (
                <Paint
                    key={ paint.key }
                    paint={ paint }
                    changePaint={this._changePaint}
                />
            );
        });
        
        return(

            <RX.View style={_styles.BigBox}>

            <RX.View style={_styles.Box1}>
                <RX.Text style={_styles.Titulo}>
                    TEXTILES
                    </RX.Text>
                    <RX.View style={_styles.CuadroDetalle}>
                    <Image style={_styles.Cuadro} cloudName={'dwuk3500t'} width="280" height="320" publicId={this.state.paint.imgUrl}/>
             <RX.Text style={_styles.TitleText}>
                        {this.state.paint.title}    

                        </RX.Text>
                        <RX.Text style={_styles.Text}>
                            {this.state.paint.text}    
                          </RX.Text>
                          <RX.Text style={_styles.TitlePrice}>
                            {this.state.paint.price}    

                        </RX.Text>
                    </RX.View>

            </RX.View>
                    <RX.View style={_styles.Box2}>
                      
                                  <RX.ScrollView style={{paddingLeft:120,height:RX.UserInterface.measureWindow().height,width:600,marginRight:0}}>
                                   {paints}
                                 </RX.ScrollView>


                   </RX.View>
                   


            </RX.View>
        )
    }

    private _changePaint=(p:PaintListItemInfo)=>{
        this.setState({
            paint: p
                })
    }

}
export = Textiles;