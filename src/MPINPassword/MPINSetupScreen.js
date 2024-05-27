import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

const MPINSetupScreen = () => {
    const [mpin, setMpin] = useState('');
    const [confirmMpin, setConfirmMpin] = useState('');

    const handleMpinSetup = async () => {
        if (mpin !== confirmMpin) {
            Alert.alert('Error', 'MPINs do not match');
            return;
        }
        
        // Check MPIN is exactly 4 digits
        if (!/^\d{4}$/.test(mpin)) {
            Alert.alert('Error', 'MPIN must be exactly 4 digits');
            return;
        }

        try {
            // Send POST request to create MPIN
            const response = await axios.post('http://localhost:3000/mpin/create', {
                mobile_number: '1234567890', // Use actual mobile number
                mpin: mpin
            });

            // Handle response
            Alert.alert('Success', 'MPIN setup successfully');
            // Navigate to the next screen or handle further flow
        } catch (error) {
            console.error('Error creating MPIN:', error);
            Alert.alert('Error', 'Failed to set up MPIN');
        }
    };

    return (
        <View>
            <Text>Set up your MPIN:</Text>
            <TextInput
                placeholder="Enter MPIN"
                secureTextEntry
                onChangeText={setMpin}
                value={mpin}
            />
            <TextInput
                placeholder="Re-enter MPIN"
                secureTextEntry
                onChangeText={setConfirmMpin}
                value={confirmMpin}
            />
            <Button title="Set Up MPIN" onPress={handleMpinSetup} />
        </View>
    );
};

export default MPINSetupScreen;
