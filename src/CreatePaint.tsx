
import RX = require('reactxp');
const {View,Text,TextInput,Image} =RX;
import Dropzone from 'react-dropzone';
import TodosStore = require('./TodosStore');
import axios from 'axios';
const styles = {
  
    profileBox:RX.Styles.createViewStyle({
        flex:1,
     
        justifyContent:'center',
        alignItems:'center',
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
      Button: RX.Styles.createTextStyle({
        color: 'black',
         fontFamily:'MMAchamp'
      }),
};

interface MainPanelProps {
    onPressNavigateProfile: () => void;
    changeToggle:(p:boolean)=>void;
}


interface ButtonHoverState{
    todoText?: string;
    todoImgUrl?:string;
    todoTitle?:string;
    todoPrice?:string;
    todoType?:string;
    todoDelete?:string;
    secret?:string;
    cargando:boolean;
    file?:File[];
}


class CreatePaint extends RX.Component<MainPanelProps, ButtonHoverState> {
 
    constructor(props:null){
        super(props)
        this.state={
            todoText:'',
            todoImgUrl:'',
            todoTitle:'',
            todoPrice:'',
            todoType:'',
            todoDelete:'',
            secret:'',
            file:[],
            cargando:false,
        }

       this._onPressNavigateProfile=this._onPressNavigateProfile.bind(this);
 this.onDropFile=this.onDropFile.bind(this);
    }
    componentDidMount(){
        this.props.changeToggle(false)
    }

      onDropFile(files:File[]){
          var elFile=files
          this.setState(function(prevState) {
            return {file: [...prevState.file,...elFile]};
        });  
       
        }
//
     render() {
        return (
        <View style={styles.profileBox}>
        <Image style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} resizeMode='cover'  source={'./src/assets/img/fondo.png'}>
           <Text style={{fontSize:55,fontFamily:'Bintar'}}>
            Create Paint
            </Text>

            <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Titulo
                </Text>
                <TextInput 
                   placeholder={ 'Enter Title' }
                    value={ this.state.todoTitle }
                    onChangeText={ this._onChangeTitle }
                    autoFocus={ true }
                    style={{borderWidth:2,borderColor:'black',height:20,width:200}}

                    />

            <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Description
                </Text>
                <TextInput
                    placeholder={ 'Enter Text' }
                    value={ this.state.todoText }
                    onChangeText={ this._onChangeText }                             
                    autoFocus={ true }
                    style={{borderWidth:2,borderColor:'black',height:20,width:200}}/>

            <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Price
                </Text>
                <TextInput
                 placeholder={ 'Enter Price' }
                  value={ this.state.todoPrice }
                  onChangeText={ this._onChangePrice }     
                style={{borderWidth:2,borderColor:'black',height:20,width:200}}/>
               
                <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Imagen
                </Text>
                <View style={{borderStyle:'dashed',marginTop:10,paddingLeft:20,paddingRight:20,paddingTop:25,borderWidth:2,borderColor:'black'}}>               
                <Dropzone style={{width:250,height:100}} onDrop={(files)=>this.onDropFile(files)}>
                        <Text style={{color:'white'}}>Drop the image here.</Text>
                    </Dropzone>
                    </View>
                  
                   
            <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Tipo
                </Text>
               
                <TextInput 
                 placeholder={ 'draw, textil, paint' }
                 onChangeText={ this._onChangeType }
                 value={ this.state.todoType }
                 autoFocus={ true }
                style={{borderWidth:2,borderColor:'black',height:20,width:200}}/>
                <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Clave
                </Text>
               
                <TextInput 
                 placeholder={ 'pass' }
                 onChangeText={ this._onChangeSecret }
                 value={ this.state.secret }
                 autoFocus={ true }
                style={{borderWidth:2,borderColor:'black',height:20,width:200}}/>
                <RX.View style={styles.ButtonView} >
            <RX.Button style={styles.Button} onPress={ this._onPressNavigateProfile }>
                Save Paint
                </RX.Button>
            
                </RX.View>
                {this.state.cargando?<Text>Cargando..</Text>:null}
                <Text style={{fontSize:20,fontFamily:'JennaSue'}}>
                Borrar Cuadro
                </Text>
               
                <TextInput 
                 placeholder={ 'Enter Title to delete' }
                 onChangeText={ this._onChangeDelete }
                 value={ this.state.todoDelete }
                 autoFocus={ true }
                style={{borderWidth:2,borderColor:'black',height:20,width:200}}/>

                <RX.View style={styles.ButtonView} >
            <RX.Button style={styles.Button} onPress={ this._onPressDelete }>
               Borrar
                </RX.Button>
            
                </RX.View>
            </Image>
            </View>
        );
    }
      
    private _onPressDelete = () => {
        if (this.state.todoDelete&&this.state.secret==='valeriateran1') {
           
         TodosStore.deleteTodo(this.state.todoDelete);
      
        this.props.onPressNavigateProfile();
    
        }
    }

    async _onPressNavigateProfile() {
        if (this.state.todoTitle&&this.state.secret==='valeriateran1') {
        this.setState({cargando:true})
        const formData=new FormData()

       formData.append('file',this.state.file[0]);

        formData.append('upload_preset','u0zuz2rf');
     const response=await axios.post(
        'https://api.cloudinary.com/v1_1/dwuk3500t/image/upload',
        formData
     );
        this.setState({
            todoImgUrl:response.data.public_id,
        })
        TodosStore.addTodo(this.state.todoText,this.state.todoTitle,this.state.todoImgUrl,this.state.todoPrice,this.state.todoType);
      
        this.setState({cargando:false})
          this.props.onPressNavigateProfile();
    }
      }
  
    private _onChangeSecret= (newText: string) => {
        this.setState({ secret: newText });
    }
    private _onChangeDelete= (newText: string) => {
        this.setState({ todoDelete: newText });
    }
    private _onChangeText = (newText: string) => {
        this.setState({ todoText: newText });
    }

    private _onChangeTitle = (newText: string) => {
        this.setState({ todoTitle: newText });
    }


    private _onChangeType = (newText: string) => {
        this.setState({ todoType: newText });
    }
    
    private _onChangePrice = (newText: string) => {
        this.setState({ todoPrice: newText });
    }
    
    


    
}

export = CreatePaint;
