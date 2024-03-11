import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function ModalTutorial() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <Button
                title='Press'
                onPress={() => setIsModalVisible(true)}
                color='midnightblue'
            />

            <Modal
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType='slide'
                presentationStyle='pageSheet'
            >
                <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
                    <Text>Modal Content</Text>
                    <Button
                        title='Close'
                        color='midnightblue'
                        onPress={() => setIsModalVisible(false)}
                    />
                </View>
            </Modal>
        </View>
    );
}
