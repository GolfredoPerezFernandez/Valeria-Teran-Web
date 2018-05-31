/*
* Top-level UI for sample to-do app.
*/

import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import RX = require('reactxp');
const {View} =RX;
import Nav = require('./Nav');
import Profile =require('./Profile');
import Contact =require('./Contact');

import Menu = require('./Menu');
import Gallery = require('./Gallery');
import Drawings = require('./Drawings');
import Textiles =require('./Textiles');
import Paintings =require('./Paintings');
import CreatePaint =require('./CreatePaint');

enum NavigationRouteId {
    Contact,
    Profile,
    Textiles,
    Drawings,
    Menu,
    Paintings,
    Gallery,
    CreatePaint,
}


interface MenuState{
    isToggle: boolean;
    isGallery:boolean;
}

class TodoAppRootView extends RX.Component<null, MenuState> {
    private _navigator: Navigator;

    constructor(props: null){
        super(props);
        this.state={
            isToggle: false,
            isGallery:false,
        }
    }
    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.Profile,
            sceneConfigType: Types.NavigatorSceneConfigType.Fade
        }]);
    }
//
    render() {
        return (
            <View style={{flex:1,flexDirection:'row',backgroundColor:'black',height:RX.UserInterface.measureWindow().height}}>
            <View  style={{flex:94}}>
          
               
            <Navigator
                ref={ this._onNavigatorRef }
                renderScene={ this._renderScene }
                delegateSelector={ DelegateSelector }
            />
            </View>
            <View style={{flex:6}}>
               <Nav onPressNavigateCreatePaint={this._onPressNavigateCreatePaint} changeToggle={this._changeToggle} onNavigateBack={this._onPressBack} onPressNavigateProfile={this._onPressNavigateProfile}  onPressNavigateGallery={this._onPressNavigateGallery} onPressNavigateContact={this._onPressNavigateContact} isToggle={this.state.isToggle} onPressNavigateMenu={this._onPressNavigateMenu } />
            </View>
            </View>
        );
    }

    private _onNavigatorRef = (navigator: Navigator) => {
        this._navigator = navigator;
    }

    private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.Profile:
                return (
                    <RX.Image style={{flex:1}} resizeMode='cover' source={'./src/assets/img/fondo.png'}>
              <Profile  changeToggle={this._changeToggle} onPressNavigateGallery={this._onPressNavigateGallery} />
                </RX.Image>
                  
                );
                case NavigationRouteId.Contact:
                return (
                    <RX.Image style={{flex:1}} resizeMode='cover' source={'./src/assets/img/fondo.png'}>
                 
                    <Contact  changeToggle={this._changeToggle} />  
                    </RX.Image>
                );
                case NavigationRouteId.Gallery:
                return (
                    <Gallery onPressNavigateTextiles={this._onPressNavigateTextiles}  onPressNavigateDrawings={this._onPressNavigateDrawings} onPressNavigatePaintings={this._onPressNavigatePaintings} changeToggle={this._changeToggle} />
                

    )

            case NavigationRouteId.Menu:
                return (
                    
                            <Menu  onPressNavigateProfile={this._onPressNavigateProfile}  onPressNavigateGallery={this._onPressNavigateGallery} onPressNavigateContact={this._onPressNavigateContact}  isToggle={this.state.isToggle} changeToggle={this._changeToggle}  />
               )
                case NavigationRouteId.Paintings:
                return (
                    <RX.Image style={{flex:1}} resizeMode='cover' source={'./src/assets/img/fondo.png'}>

                            <Paintings changeToggle={this._changeToggle}/>
          
                            </RX.Image>

                )
                case NavigationRouteId.Drawings:
                return (
                    <RX.Image style={{flex:1}} resizeMode='cover' source={'./src/assets/img/fondo.png'}>

                           <Drawings changeToggle={this._changeToggle} />
                           </RX.Image>

                )
                case NavigationRouteId.Textiles:
                return (
                    <RX.Image style={{flex:1}} resizeMode='cover' source={'./src/assets/img/fondo.png'}>

                           <Textiles changeToggle={this._changeToggle}/>
                           </RX.Image>

                ) 
                case NavigationRouteId.CreatePaint:
                return (
                    <RX.Image style={{flex:1}} resizeMode='cover' source={'./src/assets/img/fondo.png'}>

                           <CreatePaint onPressNavigateProfile={this._onPressNavigateProfile} changeToggle={this._changeToggle}/>
                           </RX.Image>

                )
            }

        return null;
    }

    private _changeToggle=(p:boolean)=>{
        this.setState({
            isToggle:p
            })
    }


    private _onPressBack = () => {
        this._navigator.pop();
    }


    private _onPressNavigateContact = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Contact,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateCreatePaint = () => {
        this._navigator.push({
            routeId: NavigationRouteId.CreatePaint,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateTextiles=()=>{
        this._navigator.push({
            routeId: NavigationRouteId.Textiles,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    private _onPressNavigateDrawings=()=>{
        this._navigator.push({
            routeId: NavigationRouteId.Drawings,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    private _onPressNavigateMenu = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Menu,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateGallery = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Gallery,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateProfile = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Profile,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigatePaintings = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Paintings,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
}

export = TodoAppRootView;
