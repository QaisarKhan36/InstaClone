const { RegisterData } = require("../model/registerDataModel");
const bcrypt = require("bcrypt");

const loginData = async (req, res) => {
  try {
    const { contactInfo, password } = req.body;

    // Check if user with the given contactInfo already exists
    const existingUser = await RegisterData.findOne({ contactInfo });

    if (!existingUser) {
      res.status(400).json({ message: "User not Found" });
    } else {
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (passwordMatch) {
        res.status(200).json({ message: "Login Successfull" });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    }
  } catch (error) {
    res.send(500).json({ message: "Internal System Error", err: err.message });
  }
};

// const getAllRegisteredData = async (req, res) => {
//   try {
//     const LoginDatas = await LoginData.find().exec();
//     res.status(200).json(LoginDatas);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "Internal System Error", err: err.message });
//   }
// };

// const getRegisteredData = async (req, res) => {
//   try {
//     const LoginData = await LoginData.findById(req.params.id);
//     if (LoginData) {
//       res.json(LoginData);
//     } else {
//       res.json({ message: "user not found" });
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "Internal System Error", err: err.message });
//   }
// };

// const updateRegisteredData = async (req, res) => {
//   const { contactInfo, fullName, password, userName } = req.body;
//   try {
//     const LoginData = await LoginData.findById(req.params.id);
//     if (LoginData) {
//       LoginData.set({
//         contactInfo: contactInfo ?? LoginData.contactInfo,
//         fullName: fullName ?? LoginData.fullName,
//         password: password ?? LoginData.password,
//         userName: userName ?? LoginData.userName,
//       });
//       LoginData.save();
//       res
//         .status(200)
//         .json({ message: "registeredData updated successfully", LoginData });
//     } else {
//       res.json({ message: "registeredData not found" });
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "Internal System Error", err: err.message });
//   }
// };

// const deleteRegisteredData = async (req, res) => {
//   const result = await LoginData.findById(req.params.id);
//   if (result) {
//     await result.deleteOne();
//     res.status(200).json({ message: "registeredData deleted successfully" });
//   } else {
//     res.status(404).json({ message: "registeredData not found" });
//   }
// };

module.exports = {
  loginData,
  //   getAllRegisteredData,
  //   getRegisteredData,
  //   updateRegisteredData,
  //   deleteRegisteredData,
};
