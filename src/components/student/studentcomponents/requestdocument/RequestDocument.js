import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./RequestDocument.css";
import { useDispatch, useSelector } from "react-redux";
import integrateRazorpay from "../../../../utils/RarzorpayIntegration";
import { getAllDocsOfStudent, sendDocsRequest } from "../../../../store/studentrelated/StudentHandle";

const RequestDocument = () => {
  const {status,response,docsListOfStudent} = useSelector((state) => state.student);
  console.log(status,response);

  const [documents, setDocuments] = useState("");
  const [reqDocList, setReqDocList] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  const handleClickedDoc = async (id) => {
    console.log(id);
    if (!reqDocList?.includes(id)) {
      setReqDocList([...reqDocList, id]);
    } else {
      const updatedList = reqDocList?.filter((docId) => docId !== id);
      setReqDocList(updatedList);
    }
  };

  const handleDocsRequest = async () => {
    if (reqDocList?.length > 0 && totalAmount > 0) {
      console.log("both");
      const to = "CollegeDocumentFee";
      const data = {
        studentId: "661432f93bd0b5d35800b14a",
        studentType: "College",
        amountPaid: totalAmount,
        datePaid: new Date(),
        documentsIds: reqDocList,
        email: "alice.smith@example.com",
      };
      await integrateRazorpay(dispatch, data, to);

    } else if (reqDocList?.length > 0) {
      const data = {
        studentId: "661432f93bd0b5d35800b14a",
        roleType: "College",
        documentsIds: reqDocList,
      };
      console.log(data);
      dispatch(sendDocsRequest(data));

    } else {
      alert("At least select one document!");
    }
  };

  useEffect(() => {
    const amount =
      reqDocList &&
      reqDocList?.reduce((accumulator, docId) => {
        const doc = documents?.find((doc) => doc?._id === docId); 
        if (doc) {
          console.log(doc?.fees);
          return accumulator + parseInt(doc?.fees);
        }
        return accumulator;
      }, 0);
    setTotalAmount(amount);
  }, [reqDocList]);


  useEffect(() => {
    const fields = {
      roleType: "College",
      studentId: "661432f93bd0b5d35800b14a",
    }
    dispatch(getAllDocsOfStudent(fields))
    if(docsListOfStudent?.length > 0){
      setDocuments(docsListOfStudent);
    }
  },[docsListOfStudent?.length]);
  console.log(docsListOfStudent);
  

  return (
    <div className="studentComponent">
      <div className="navHeaderForTeaAndStd">
        <h1>Request Document</h1>
      </div>
      <StyledDiv>
        <h2 style={{ marginLeft: "30px", marginTop: "25px" }}>
          Select The Document
        </h2>
        <div className="componentGridForReqDocument">
          {documents &&
            documents?.map((doc, index) => {
              return (
                <div
                  className="requestDocumentDivs"
                  key={doc?._id}
                  onClick={() => handleClickedDoc(doc?._id)}
                >
                  <div
                    className={
                      !reqDocList?.includes(doc?._id)
                        ? "selectDoc"
                        : "selecDocWithBackGround"
                    }
                  ></div>
                  <div className="onlyNameOfDoc">{doc?.documentName}</div>
                </div>
              );
            })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button className="requestDocumentButton" onClick={handleDocsRequest}>
            Request Doc {reqDocList && `(Total Amount: ₹${totalAmount})`}
          </button>
        </div>
      </StyledDiv>
    </div>
  );
};

export default RequestDocument;

const StyledDiv = styled.div`
  display: flex;
  width: calc(100% - 20px);
  background-color: white;
  margin-left: 10px;
  flex-direction: column;
`;
