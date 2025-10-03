import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';

export default function RegisterScreen( { navigation } ) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [errors, setErrors] = useState({});
      const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(null);
    const validate = () => {
        let valid = true;
        let newErrors = {};

        // Name
        if (!name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        // Email
        if (!email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        // Password
        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        // Phone
        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^[0-9]{10,15}$/.test(phone)) {
            newErrors.phone = 'Phone must be 10–15 digits';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const onSubmit = () => {
        if (validate()) {
            const formData = { name, email, password, phone };
            console.log('Form Data:', formData);
                  setModalVisible(true); 
            setFormData(formData); 
            navigation.navigate('Todo');
        }
    };

    return (
        <View style={styles.container}>
            {/* Name */}
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}

            {/* Email */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            {/* Password */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {/* Phone */}
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

            {/* Submit Button */}
            <Button title="Register" onPress={onSubmit} />


              {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Form Data</Text>
            {formData && (
              <>
                <Text>Name: {formData.name}</Text>
                <Text>Email: {formData.email}</Text>
                <Text>Password: {formData.password}</Text>
                <Text>Phone: {formData.phone}</Text>
              </>
            )}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 8,
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginBottom: 8,
    },
    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

// export default function RegisterScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');

//   const [errors, setErrors] = useState({});
//   const [modalVisible, setModalVisible] = useState(false);
//   const [formData, setFormData] = useState(null);

//   const validate = () => {
//     let valid = true;
//     let newErrors = {};

//     // Name
//     if (!name.trim()) {
//       newErrors.name = 'Name is required';
//       valid = false;
//     }

//     // Email
//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//       valid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = 'Invalid email format';
//       valid = false;
//     }

//     // Password
//     if (!password) {
//       newErrors.password = 'Password is required';
//       valid = false;
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       valid = false;
//     }

//     // Phone
//     if (!phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//       valid = false;
//     } else if (!/^[0-9]{10,15}$/.test(phone)) {
//       newErrors.phone = 'Phone must be 10–15 digits';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const onSubmit = () => {
//     if (validate()) {
//       const data = { name, email, password, phone };
//       setFormData(data);
//       setModalVisible(true); // Show modal
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Name */}
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       {errors.name && <Text style={styles.error}>{errors.name}</Text>}

//       {/* Email */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       {errors.email && <Text style={styles.error}>{errors.email}</Text>}

//       {/* Password */}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {errors.password && <Text style={styles.error}>{errors.password}</Text>}

//       {/* Phone */}
//       <TextInput
//         style={styles.input}
//         placeholder="Phone"
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//       />
//       {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

//       {/* Submit Button */}
//       <Button title="Register" onPress={onSubmit} />

//       {/* Modal */}
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Form Data</Text>
//             {formData && (
//               <>
//                 <Text>Name: {formData.name}</Text>
//                 <Text>Email: {formData.email}</Text>
//                 <Text>Password: {formData.password}</Text>
//                 <Text>Phone: {formData.phone}</Text>
//               </>
//             )}

//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.closeText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     marginBottom: 8,
//     borderRadius: 5,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 8,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     marginTop: 20,
//     backgroundColor: '#2196F3',
//     padding: 10,
//     borderRadius: 5,
//     alignSelf: 'center',
//   },
//   closeText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
