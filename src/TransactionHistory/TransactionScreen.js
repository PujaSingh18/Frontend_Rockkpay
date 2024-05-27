import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';

const TransactionHistoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {mobileNumber, userName} = route.params;

  if (!mobileNumber || !userName) {
    // Handle missing parameters
    Alert.alert(
      'Error',
      'Required information is missing. Please try again.',
      [{ text: 'OK', onPress: () => navigation.navigate('HomeMainScreen', {mobileNumber, userName} ) }]
    );
    return null; // Return early to avoid rendering the component
  }

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch transaction history
  const fetchTransactionHistory = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.39:5000/api/protected/transaction-history', // API endpoint
        { mobileNumber: mobileNumber, name: userName } // Data for the POST request
      );

      if (response.status === 200) {
        setTransactions(response.data.transactions); // Set the transactions in state
      } else {
        setError('Failed to fetch transaction history.');
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
      setError(`Error fetching transaction history: ${error.message}`);
    } finally {
      setLoading(false); // Indicate that loading is complete
    }
  };

  useEffect(() => {
    fetchTransactionHistory(); // Fetch data when the component is mounted
  }, [mobileNumber, userName]); // Dependency array with variables that, when changed, will trigger the effect again

  if (loading) {
    // Show a loading indicator while fetching data
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    // Show an error message if something goes wrong
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History for {userName}</Text>
      <FlatList style={{backgroundColor:'white', borderRadius:10, marginTop:'4%'}}
        data={transactions}
        keyExtractor={(item) => item.transaction_id} // Ensure each item has a unique key
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={{color:'black', fontWeight:'bold'}}>Transaction ID: {item.transaction_id}</Text>
            <Text style={{color:'black'}}>Amount: ₹{item.amount}</Text>
            <Text style={{color:'black'}}>Payment Mode: {item.payment_mode}</Text>
            {/* Conditional styling based on the status */}
            <Text
              style={{ fontWeight:'bold',
                color:
                  item.status === 'success'
                    ? 'green'
                    : item.status === 'userCancelled' ? 'red'
                    : 'black',
              }}
            >
              Status: {item.status}
            </Text>
            <Text style={{color:'black'}}>Transaction Date: {item.transaction_date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
});

export default TransactionHistoryScreen;










// import axios from 'axios';
// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// const TransactionScreen = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log('Fetching transactions...');

//     axios
//       .post('https://api.ipaisa.site/transaction-api-v2') // Change userId as needed
//       .then((response) => {
//         console.log('Transactions fetched successfully', response.data);
//         setTransactions(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.error('Server responded with error:', error.response.status, error.response.data);
//         } else if (error.request) {
//           console.error('No response received:', error.request);
//         } else {
//           console.error('Error setting up request:', error.message);
//         }

//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   if (error) {
//     return (
//       <View>
//         <Text style={{ color: 'red' }}>Error fetching transactions: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={transactions}
//       keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} // Safely handle undefined 'id'
//       renderItem={({ item }) => (
//         <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
//           <Text style={{ fontWeight: 'bold' }}>
//             {moment(item.addedon).format('YYYY-MM-DD HH:mm')} {/* Format the date */}
//           </Text>
//           <Text>{item.merchantName}</Text>
//           <Text>{item.description}</Text>
//           <Text>Status: {item.status}</Text>
//           <Text>Amount: ${item.amount.toFixed(2)}</Text>
//         </View>
//       )}
//     />
//   );
// };

// export default TransactionScreen;









// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
// import { ArrHis } from '../Util/Array';

// export default function TransactionScreen() {
//   return (
//     <>
//       <View style={styles.ts}>
//         <Text
//           style={{
//             fontSize: 15,
//             color: 'black',
//             fontWeight: 'bold',
//             marginTop: '10%',
//             marginLeft: '5%',
//           }}>
//           History
//         </Text>
//         {ArrHis.map((item, index) => (
//           <View
//             style={{
//               alignItems: 'center',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               marginTop: '5%',
//               marginLeft: '5%',
//               height: 65,
//               width: '92%',
//             }}
//             key={item.id}>
//             {item.img}
//             {/* <IPLComponent /> */}
//             <View style={{marginLeft: '-10%', width: '50%'}}>
//               <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
//                 {item.title}
//               </Text>
//               <Text style={{fontSize: 12, color: 'black'}}>
//                 {item.subtitle}
//               </Text>
//             </View>
//             <Text style={{fontSize: 15, color:item.color, fontWeight: 'bold'}}>
//               {item.rup}
//             </Text>
//           </View>
//         ))}
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   ts: {
//     width: '94%',
//     height: 450,
//     backgroundColor: '#EEF5FF',
//     borderRadius: 20,
//     marginTop: moderateVerticalScale(20),
//     justifyContent: 'center',
//     marginLeft: moderateScale(10),
//   },
// });






// import axios from 'axios'; // For HTTP requests
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

// const TransactionScreen = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch payment history from the backend
//     axios
//       // .get('http://192.168.233.246:8080/api/get/payhist') // Use your backend endpoint
//       .post('https://api.ipaisa.site/transaction-api-v2') // Use your backend endpoint
//       .then((response) => {
//         setHistory(response.data); // Set the history data from the backend
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching payment history:', error);
//         setLoading(false);
//       });
//   }, []); // Run this effect once when the component mounts

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={history} // List of payment history items
//           keyExtractor={(item) => item.id.toString()} // Unique key for each item
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <Text style={styles.title}>{item.payment_name}</Text>
//               <Text style={styles.date}>{item.payment_date}</Text>
//               <Text style={styles.bank}>{item.bank_name}</Text>
//               <Text style={styles.amount}>
//                 {item.amount !== undefined ? `₹${item.amount.toFixed(2)}` : '₹0.00'}
//               </Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignitems: 'center',
//     padding: 20,
//   },
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   date: {
//     color: 'gray',
//   },
//   bank: {
//     color: 'gray',
//   },
//   amount: {
//     color: 'green',
//   },
// });

// export default TransactionScreen;
