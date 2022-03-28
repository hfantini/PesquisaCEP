import React, {useRef} from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native"

// == STYLES

let style = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#15C243",
        },

        cInput:
        {
            flex: 1.5,
            alignItems: "center",
            
            input:
            {
                width: "100%",
                borderWidth: 2,
                borderColor: "#15C243",
                color: "#15C243",
                fontSize: 24,
                borderRadius: 15,
                textAlign: "center"
            }
        },

        options:
        {
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
            width: "100%",

            btnClear:
            {
                flex: 1,
                borderWidth: 2,
                borderColor: "#15C243",
                backgroundColor: "#15C243",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 5,

                text:
                {
                    color: "#FFFFFF",
                    fontSize: 18
                }
            },
       

            btnSearch:
            {
                flex: 1,
                borderWidth: 2,
                borderColor: "#15C243",
                backgroundColor: "#15C243",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,

                text:
                {
                    color: "#FFFFFF",
                    fontSize: 18
                }
            },

            btnSearchDisabled:
            {
                flex: 1,
                borderWidth: 2,
                borderColor: "#15C24366",
                backgroundColor: "#15C24366",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,

                text:
                {
                    color: "#FFFFFF",
                    fontSize: 18
                }
            }
        }
    }
)

// == COMPOENENT

export default function SearchBar(props)
{
    // == REF
    const inputCEP = useRef(null);

    // == EVENTS

    function onClearPress()
    {
        if( props.onValueChange != null )
        {
            props.onValueChange(null)
            inputCEP.current.blur();

            if(props.onClearPress !== null)
            {
                props.onClearPress();
            }
        }
    }

    function onSearchPress()
    {
        if( props.value !== null && props.value !== "")
        {
            inputCEP.current.blur();
            props.onSearchPress();
        }
    }

    return(
        <View style={style.container}>

            <View style={style.cInput}>

                <TextInput style={style.cInput.input}
                           placeholder="DIGITE O CEP"
                           placeholderTextColor="#15C24377"
                           keyboardType="numeric"
                           ref={inputCEP}
                           value={props.value}
                           onChangeText={props.onValueChange}>
                </TextInput>

            </View>

            <View style={style.options}>

            <TouchableOpacity style={ style.options.btnClear } onPress={onClearPress}>

                <View style={style.options.btnClear.container}>

                    <Text style={style.options.btnClear.text}>LIMPAR</Text>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={ (props.value !== null && props.value !== "" ? style.options.btnSearch : style.options.btnSearchDisabled) } onPress={onSearchPress}>

                <View style={style.options.btnSearch.container}>

                    <Text style={style.options.btnSearch.text}>PESQUISAR</Text>

                </View>

            </TouchableOpacity>         

            </View>
            
        </View>
    );
}