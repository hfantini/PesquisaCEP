import React from "react";
import {StyleSheet, View, Text, Image, ActivityIndicator, FlatList} from "react-native";
import ResultLine from "./ResultLine";

// == STYLES

let style = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            
        },

        dataContainer:
        {

        },

        image:
        {
            width: 125,
            height: 125,
            marginLeft: "auto",
            marginRight: "auto"
        },

        text:
        {
            marginTop: 30,
            color: "#15C243",
            fontSize: 24
        },

        textError:
        {
            marginTop: 45,
            color: "#BA261C",
            fontSize: 24
        }
        
    }
)

// == COMPONENT

export default function ResultView(props)
{
    return(
        <View style={ (props.curState !== "SHOW" ? style.container : style.dataContainer) }>

            { props.curState == "EMPTY" && <View>

                <Image source={require("../../Assets/img-loupe.png")}
                       tintColor="#15C243"
                       style={style.image}>
                </Image>

                <Text style={style.text}>
                    REALIZE UMA PESQUISA
                </Text>

            </View> }
            
            { props.curState == "LOADING" && <View>

                <ActivityIndicator size={150} color="#15C243"></ActivityIndicator>

            </View> }
            
            { props.curState == "SHOW" && <View>

                <FlatList data={props.data}
                          renderItem={ ( {item} ) => <ResultLine item={item}></ResultLine>}>

                </FlatList>


            </View> }

            { props.curState == "NODATA" && <View>

                <Image source={require("../../Assets/img-nodata.png")}
                       tintColor="#15C243"
                       style={style.image}>
                </Image>

                <Text style={style.text}>
                    NENHUM DADO
                </Text>

            </View> }

            { props.curState == "ERROR" && <View>

            <Image source={require("../../Assets/img-error.png")}
                   tintColor="#ba261c"
                   style={style.image}>
            </Image>

            <Text style={style.textError}>
                ERRO NA REQUISIÇÃO
            </Text>

            </View> }

        </View>
    )
};