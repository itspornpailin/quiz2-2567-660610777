"use client";
import { PostOwnnerProps } from "@/libs/types";
import React from "react";
import { useState, useEffect } from "react";

export default function PostOwnner({ name, studentId, likes }: PostOwnnerProps) {
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    if (likes > 0) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  })

  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/660610777.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">{name} {studentId}</span>
        </div>

        <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span> 
        {isOk &&
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">{likes} คน</span>
        </div>
        }
        

        <hr className="m-0 border" />
      </div>
    </div>
  )
}
