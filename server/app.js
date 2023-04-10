import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { doc, collection, query, getDocs, where } from "firebase/firestore";
import db from "../server/firebase-config.js";

const PORT = process.env.PORT || 8080;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//stating the server
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

//reading the user admin
app.get("/checkUser", async (req, res) => {
  const { username } = req.headers;
  const { password } = req.headers;

  const q = query(collection(db, "User"), where("username", "==", username));
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => {
      if (doc.data().password === password) {
        res.status(200).send({ message: "valid", error: false });
      } else {
        res.status(200).send({ message: "invalid", error: true });
      }
    });
  } catch (error) {
    res.status(409).send({ message: error, error: true });
  }
});
