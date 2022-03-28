import React from "react";
import {StyleSheet, View, Text} from "react-native"

// == STYLES

let style = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#15C243",
            paddingLeft: 15,
            paddingRight: 15,

            cLeft:
            {
                flex: 2,
                flexDirection: "row",
                alignItems: "center"
            },
            cRight:
            {
                flex: 1,
                flexDirection: "row",
            }
        },
        title:
        {
            fontFamily: "Arial, Roboto",
            fontSize: 18,
            color: "#FFFFFF"
        }
    }
)

// == COMPONENT

export default function Header()
{
    return(
        <View style={style.container}>

            <View style={style.container.cLeft}>

                <Text style={style.title}>PESQUISADOR DE CEP</Text>

            </View>

            <View style={style.container.cRight}>
                
            </View>

        </View>
    )
}