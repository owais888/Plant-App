import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>Plants are one of six big groups (kingdoms) of living things. They are autotrophic eukaryotes, which means they have complex cells, and make their own food. Usually they cannot move (not counting growth).

                        Plants include familiar types such as trees, herbs, bushes, grasses, vines, ferns, mosses, and green algae. The scientific study of plants, known as botany, has identified about 350,000 extant (living) species of plants. Fungi and non-green algae are not classified as plants.

                        Most plants grow in the ground, with stems in the air and roots below the surface. Some float on water. The root part absorbs water and some nutrients the plant needs to live and grow. These climb the stem and reach the leaves. The evaporation of water from pores in the leaves pulls water through the plant. This is called transpiration.

                        A plant needs sunlight, carbon dioxide, minerals and water to make food by photosynthesis. A green substance in plants called chlorophyll traps the energy from the Sun needed to make food. Chlorophyll is mostly found in leaves, inside plastids, which are inside the leaf cells. The leaf can be thought of as a food factory. Leaves of plants vary in shape and size, but they are always the plant organ best suited to capture solar energy. Once the food is made in the leaf, it is transported to the other parts of the plant such as stems and roots.[5][6]

                        The word "plant" can also mean the action of putting something in the ground. For example, farmers plant seeds in the field.

                        Photosynthesis is a process that is taken place by the leaves on the plant. The leaves are the only parts of a plant that can do this process (as they adapted). This is also known as how the plant gets its food.You can make the process quicker by adding more CO2, light and chlorophyll.


</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}>

                <Text style={styles.textStyle}>About Plant's</Text>

            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        backgroundColor: '#cfe6d8',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#65b588',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});