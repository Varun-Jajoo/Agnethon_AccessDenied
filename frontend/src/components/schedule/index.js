'use client'
import React, { useState, useRef, useEffect } from "react";
import InitialModal from "./components/InitialModal";
import InfoModal from "./components/InfoModal";
import ScheduleTable from "./components/ScheduleTable";
import { Button } from "antd";


const Schedule = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [periods, setPeriods] = useState(null);
  const [days, setDays] = useState(null);
  // const [functionCalls, setFunctionCalls] = useState([
  //   { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9A" },
  //   { teacher: "SD", subject: "Pe", sessions: 3, targetClass: "9A" },
  //   { teacher: "MK", subject: "Art", sessions: 1, targetClass: "9A" },
  //   { teacher: "KS", subject: "Phy", sessions: 4, targetClass: "9A" },
  //   { teacher: "DP", subject: "Math", sessions: 8, targetClass: "9A" },
  //   { teacher: "SJ", subject: "BI", sessions: 5, targetClass: "9A" },
  //   { teacher: "JM", subject: "Opt", sessions: 5, targetClass: "9A" },
  //   { teacher: "GSA", subject: "S.S", sessions: 4, targetClass: "9A" },
  //   { teacher: "SSR", subject: "P.S", sessions: 3, targetClass: "9A" },
  //   { teacher: "DS", subject: "CCA", sessions: 3, targetClass: "9A" },
  //   { teacher: "KS", subject: "Chem", sessions: 3, targetClass: "9A" },
  //   { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9A" },
  //   { teacher: "KS", subject: "Sci", sessions: 1, targetClass: "9A" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9A" },
  //   { teacher: "BN", subject: "S.S", sessions: 1, targetClass: "9A" },
  //   { teacher: "DP", subject: "Math", sessions: 8, targetClass: "9B" },
  //   { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9B" },
  //   { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "9B" },
  //   { teacher: "MA", subject: "Opt", sessions: 5, targetClass: "9B" },
  //   { teacher: "GSA", subject: "S.S", sessions: 4, targetClass: "9B" },
  //   { teacher: "SSR", subject: "P.S", sessions: 3, targetClass: "9B" },
  //   { teacher: "DSO", subject: "Sci", sessions: 2, targetClass: "9B" },
  //   { teacher: "KS", subject: "Phy", sessions: 3, targetClass: "9B" },
  //   { teacher: "KS", subject: "Chem", sessions: 3, targetClass: "9B" },
  //   { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "9B" },
  //   { teacher: "DP", subject: "CCA", sessions: 3, targetClass: "9B" },
  //   { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9B" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9B" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "9B" },
  //   { teacher: "KS", subject: "Sci", sessions: 1, targetClass: "9B" },
  //   { teacher: "BN", subject: "S.S", sessions: 1, targetClass: "9B" },
  //   { teacher: "NK", subject: "Math", sessions: 8, targetClass: "9C" },
  //   { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9C" },
  //   { teacher: "SVS", subject: "Opt", sessions: 5, targetClass: "9C" },
  //   { teacher: "KS", subject: "Chem", sessions: 4, targetClass: "9C" },
  //   { teacher: "KS", subject: "Phy", sessions: 4, targetClass: "9C" },
  //   { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "9C" },
  //   { teacher: "GSA", subject: "S.S", sessions: 3, targetClass: "9C" },
  //   { teacher: "DN", subject: "Sci", sessions: 3, targetClass: "9C" },
  //   { teacher: "KS", subject: "CCA", sessions: 3, targetClass: "9C" },
  //   { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "9C" },
  //   { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9C" },
  //   { teacher: "SSR", subject: "P.S", sessions: 2, targetClass: "9C" },
  //   { teacher: "BN", subject: "S.S", sessions: 1, targetClass: "9C" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9C" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "9C" },
  //   { teacher: "BN", subject: "Geo", sessions: 1, targetClass: "9C" },
  //   { teacher: "TR", subject: "Mar", sessions: 1, targetClass: "9C" },
  //   { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9D" },
  //   { teacher: "NK", subject: "Math", sessions: 8, targetClass: "9D" },
  //   { teacher: "DSA", subject: "Opt", sessions: 5, targetClass: "9D" },
  //   { teacher: "SSR", subject: "S.S", sessions: 4, targetClass: "9D" },
  //   { teacher: "KS", subject: "Phy", sessions: 4, targetClass: "9D" },
  //   { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "9D" },
  //   { teacher: "KS", subject: "Chem", sessions: 3, targetClass: "9D" },
  //   { teacher: "DN", subject: "Sci", sessions: 3, targetClass: "9D" },
  //   { teacher: "BN", subject: "Geo", sessions: 2, targetClass: "9D" },
  //   { teacher: "SSR", subject: "P.S", sessions: 2, targetClass: "9D" },
  //   { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "9D" },
  //   { teacher: "SSR", subject: "CCA", sessions: 3, targetClass: "9D" },
  //   { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9D" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9D" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "9D" },
  //   { teacher: "NK", subject: "Math", sessions: 9, targetClass: "10A" },
  //   { teacher: "MP", subject: "Eng", sessions: 8, targetClass: "10A" },
  //   { teacher: "JM", subject: "Opt", sessions: 5, targetClass: "10A" },
  //   { teacher: "SP", subject: "Phy", sessions: 4, targetClass: "10A" },
  //   { teacher: "BP", subject: "Chem", sessions: 4, targetClass: "10A" },
  //   { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "10A" },
  //   { teacher: "SS", subject: "Hist", sessions: 3, targetClass: "10A" },
  //   { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "10A" },
  //   { teacher: "DN", subject: "Bio", sessions: 3, targetClass: "10A" },
  //   { teacher: "NK", subject: "CCA", sessions: 3, targetClass: "10A" },
  //   { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10A" },
  //   { teacher: "SS", subject: "Eco", sessions: 2, targetClass: "10A" },
  //   { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10A" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10A" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10A" },
  //   { teacher: "NK", subject: "Math", sessions: 8, targetClass: "10B" },
  //   { teacher: "MP", subject: "Eng", sessions: 7, targetClass: "10B" },
  //   { teacher: "GG", subject: "Opt", sessions: 5, targetClass: "10B" },
  //   { teacher: "SD", subject: "P.E", sessions: 4, targetClass: "10B" },
  //   { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "10B" },
  //   { teacher: "BP", subject: "Chem", sessions: 3, targetClass: "10B" },
  //   { teacher: "SP", subject: "Phy", sessions: 3, targetClass: "10B" },
  //   { teacher: "GSA", subject: "Hist", sessions: 3, targetClass: "10B" },
  //   { teacher: "DN", subject: "Bio", sessions: 2, targetClass: "10B" },
  //   { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10B" },
  //   { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10B" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10B" },
  //   { teacher: "SS", subject: "Eco", sessions: 1, targetClass: "10B" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10B" },
  //   { teacher: "MS", subject: "Math", sessions: 9, targetClass: "10C" },
  //   { teacher: "MP", subject: "Eng", sessions: 8, targetClass: "10C" },
  //   { teacher: "SJ", subject: "B.I", sessions: 5, targetClass: "10C" },
  //   { teacher: "PJ", subject: "Opt", sessions: 5, targetClass: "10C" },
  //   { teacher: "SP", subject: "Phy", sessions: 4, targetClass: "10C" },
  //   { teacher: "BP", subject: "Chem", sessions: 4, targetClass: "10C" },
  //   { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "10C" },
  //   { teacher: "GSA", subject: "Hist", sessions: 3, targetClass: "10C" },
  //   { teacher: "GSA", subject: "CCA", sessions: 3, targetClass: "10C" },
  //   { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10C" },
  //   { teacher: "SS", subject: "Eco", sessions: 2, targetClass: "10C" },
  //   { teacher: "DN", subject: "Bio", sessions: 2, targetClass: "10C" },
  //   { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10C" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10C" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10C" },
  //   { teacher: "MS", subject: "Math", sessions: 9, targetClass: "10D" },
  //   { teacher: "NB", subject: "Eng", sessions: 8, targetClass: "10D" },
  //   { teacher: "RV", subject: "Opt", sessions: 5, targetClass: "10D" },
  //   { teacher: "SJ", subject: "B.I", sessions: 5, targetClass: "10D" },
  //   { teacher: "BP", subject: "Chem", sessions: 4, targetClass: "10D" },
  //   { teacher: "SP", subject: "Phy", sessions: 3, targetClass: "10D" },
  //   { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "10D" },
  //   { teacher: "GSA", subject: "Hist", sessions: 3, targetClass: "10D" },
  //   { teacher: "DN", subject: "Bio", sessions: 3, targetClass: "10D" },
  //   { teacher: "NB", subject: "CCA", sessions: 3, targetClass: "10D" },
  //   { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10D" },
  //   { teacher: "SS", subject: "Eco", sessions: 2, targetClass: "10D" },
  //   { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10D" },
  //   { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10D" },
  //   { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10D" },
  //   { teacher: "DG", subject: "B.S", sessions: 10, targetClass: "11C" },
  //   { teacher: "SS", subject: "Eco", sessions: 8, targetClass: "11C" },
  //   { teacher: "MSU", subject: "Ent", sessions: 8, targetClass: "11C" },
  //   { teacher: "MSU", subject: "Acc", sessions: 10, targetClass: "11C" },
  //   { teacher: "SD", subject: "P.E", sessions: 2, targetClass: "11C" },
  //   { teacher: "MSJ", subject: "G.S", sessions: 1, targetClass: "11C" },
  //   { teacher: "MK", subject: "W.E", sessions: 1, targetClass: "11C" },
  //   { teacher: "NB", subject: "Eng", sessions: 10, targetClass: "11C" },
  //   { teacher: "AP", subject: "Lib", sessions: 1, targetClass: "11C" },
  // ]);

  // const [functionCalls, setFunctionCalls] = useState([
  //   { teacher: "NR", subject: "MA", sessions: 2, targetClass: "3A" },
  //   { teacher: "SYG", subject: "HINDI", sessions: 6, targetClass: "3A" },
  //   { teacher: "SVB", subject: "ENG", sessions: 6, targetClass: "3A" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "3A" },
  //   { teacher: "APA", subject: "SCI", sessions: 6, targetClass: "3A" },
  //   { teacher: "DRS", subject: "SS", sessions: 6, targetClass: "3A" },
  //   { teacher: "JN", subject: "MUS", sessions: 3, targetClass: "3A" },
  //   { teacher: "NR", subject: "CCA", sessions: 2, targetClass: "3A" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "3A" },
  //   { teacher: "NR", subject: "MATH", sessions: 6, targetClass: "3A" },
  //   { teacher: "APA", subject: "VE", sessions: 1, targetClass: "3A" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "3A" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "3A" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "3A" },
  //   { teacher: "NR", subject: "MA", sessions: 2, targetClass: "3B" },
  //   { teacher: "PY", subject: "HINDI", sessions: 6, targetClass: "3B" },
  //   { teacher: "KN", subject: "ENG", sessions: 6, targetClass: "3B" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "3B" },
  //   { teacher: "APA", subject: "SCI", sessions: 6, targetClass: "3B" },
  //   { teacher: "ASJ", subject: "SS", sessions: 6, targetClass: "3B" },
  //   { teacher: "JN", subject: "MUS", sessions: 3, targetClass: "3B" },
  //   { teacher: "APA", subject: "CCA", sessions: 2, targetClass: "3B" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "3B" },
  //   { teacher: "NR", subject: "MATH", sessions: 6, targetClass: "3B" },
  //   { teacher: "PSS", subject: "VE", sessions: 1, targetClass: "3B" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "3B" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "3B" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "3B" },
  //   { teacher: "SVB", subject: "MA", sessions: 2, targetClass: "3C" },
  //   { teacher: "SYG", subject: "HINDI", sessions: 6, targetClass: "3C" },
  //   { teacher: "SVB", subject: "ENG", sessions: 6, targetClass: "3C" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "3C" },
  //   { teacher: "LS", subject: "SCI", sessions: 6, targetClass: "3C" },
  //   { teacher: "ASJ", subject: "SS", sessions: 6, targetClass: "3C" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "3C" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "3C" },
  //   { teacher: "SVB", subject: "CCA", sessions: 2, targetClass: "3C" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "3C" },
  //   { teacher: "SP", subject: "MATH", sessions: 6, targetClass: "3C" },
  //   { teacher: "APA", subject: "VE", sessions: 1, targetClass: "3C" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "3C" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "3C" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "3C" },
  //   { teacher: "DRS", subject: "MA", sessions: 2, targetClass: "3D" },
  //   { teacher: "SYG", subject: "HINDI", sessions: 6, targetClass: "3D" },
  //   { teacher: "SVB", subject: "ENG", sessions: 6, targetClass: "3D" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "3D" },
  //   { teacher: "APA", subject: "SCI", sessions: 6, targetClass: "3D" },
  //   { teacher: "DRS", subject: "SS", sessions: 6, targetClass: "3D" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "3D" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "3D" },
  //   { teacher: "DRS", subject: "CCA", sessions: 2, targetClass: "3D" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "3D" },
  //   { teacher: "SP", subject: "MATH", sessions: 6, targetClass: "3D" },
  //   { teacher: "APA", subject: "VE", sessions: 1, targetClass: "3D" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "3D" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "3D" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "3D" },
  //   { teacher: "LS", subject: "MA", sessions: 2, targetClass: "3E" },
  //   { teacher: "SYG", subject: "HINDI", sessions: 6, targetClass: "3E" },
  //   { teacher: "SVB", subject: "ENG", sessions: 6, targetClass: "3E" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "3E" },
  //   { teacher: "LS", subject: "SCI", sessions: 6, targetClass: "3E" },
  //   { teacher: "ASJ", subject: "SS", sessions: 6, targetClass: "3E" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "3E" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "3E" },
  //   { teacher: "LS", subject: "CCA", sessions: 2, targetClass: "3E" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "3E" },
  //   { teacher: "SP", subject: "MATH", sessions: 6, targetClass: "3E" },
  //   { teacher: "APA", subject: "VE", sessions: 1, targetClass: "3E" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "3E" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "3E" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "3E" },
  //   { teacher: "KN", subject: "MA", sessions: 2, targetClass: "4A" },
  //   { teacher: "SYG", subject: "HINDI", sessions: 6, targetClass: "4A" },
  //   { teacher: "KN", subject: "ENG", sessions: 6, targetClass: "4A" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "4A" },
  //   { teacher: "LS", subject: "SCI", sessions: 6, targetClass: "4A" },
  //   { teacher: "DRS", subject: "SS", sessions: 6, targetClass: "4A" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "4A" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "4A" },
  //   { teacher: "KN", subject: "CCA", sessions: 2, targetClass: "4A" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "4A" },
  //   { teacher: "TS", subject: "MATH", sessions: 6, targetClass: "4A" },
  //   { teacher: "KN", subject: "VE", sessions: 1, targetClass: "4A" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "4A" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "4A" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "4A" },
  //   { teacher: "TS", subject: "MA", sessions: 2, targetClass: "4B" },
  //   { teacher: "YPA", subject: "HINDI", sessions: 6, targetClass: "4B" },
  //   { teacher: "KN", subject: "ENG", sessions: 6, targetClass: "4B" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "4B" },
  //   { teacher: "PA", subject: "SCI", sessions: 6, targetClass: "4B" },
  //   { teacher: "DRS", subject: "SS", sessions: 6, targetClass: "4B" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "4B" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "4B" },
  //   { teacher: "TS", subject: "CCA", sessions: 2, targetClass: "4B" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "4B" },
  //   { teacher: "TS", subject: "MATH", sessions: 6, targetClass: "4B" },
  //   { teacher: "APA", subject: "VE", sessions: 1, targetClass: "4B" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "4B" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "4B" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "4B" },
  //   { teacher: "DZA", subject: "MA", sessions: 2, targetClass: "4C" },
  //   { teacher: "YPA", subject: "HINDI", sessions: 6, targetClass: "4C" },
  //   { teacher: "DZA", subject: "ENG", sessions: 6, targetClass: "4C" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "4C" },
  //   { teacher: "LS", subject: "SCI", sessions: 6, targetClass: "4C" },
  //   { teacher: "AAJ", subject: "SS", sessions: 6, targetClass: "4C" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "4C" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "4C" },
  //   { teacher: "DZA", subject: "CCA", sessions: 2, targetClass: "4C" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "4C" },
  //   { teacher: "TS", subject: "MATH", sessions: 6, targetClass: "4C" },
  //   { teacher: "KN", subject: "VE", sessions: 1, targetClass: "4C" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "4C" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "4C" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "4C" },
  //   { teacher: "SP", subject: "MA", sessions: 2, targetClass: "4D" },
  //   { teacher: "PY", subject: "HINDI", sessions: 6, targetClass: "4D" },
  //   { teacher: "DZA", subject: "ENG", sessions: 6, targetClass: "4D" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "4D" },
  //   { teacher: "LS", subject: "SCI", sessions: 6, targetClass: "4D" },
  //   { teacher: "SPB", subject: "SS", sessions: 6, targetClass: "4D" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "4D" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "4D" },
  //   { teacher: "SP", subject: "CCA", sessions: 2, targetClass: "4D" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "4D" },
  //   { teacher: "SP", subject: "MATH", sessions: 6, targetClass: "4D" },
  //   { teacher: "KN", subject: "VE", sessions: 1, targetClass: "4D" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "4D" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "4D" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "4D" },
  //   { teacher: "PA", subject: "MA", sessions: 2, targetClass: "4E" },
  //   { teacher: "PY", subject: "HINDI", sessions: 6, targetClass: "4E" },
  //   { teacher: "DZA", subject: "ENG", sessions: 6, targetClass: "4E" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "4E" },
  //   { teacher: "PA", subject: "SCI", sessions: 6, targetClass: "4E" },
  //   { teacher: "PSS", subject: "SS", sessions: 6, targetClass: "4E" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "4E" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "4E" },
  //   { teacher: "PA", subject: "CCA", sessions: 2, targetClass: "4E" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "4E" },
  //   { teacher: "TS", subject: "MATH", sessions: 6, targetClass: "4E" },
  //   { teacher: "KN", subject: "VE", sessions: 1, targetClass: "4E" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "4E" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "4E" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "4E" },
  //   { teacher: "PSS", subject: "MA", sessions: 2, targetClass: "5A" },
  //   { teacher: "YPA", subject: "HINDI", sessions: 6, targetClass: "5A" },
  //   { teacher: "QI", subject: "ENG", sessions: 6, targetClass: "5A" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "5A" },
  //   { teacher: "PA", subject: "SCI", sessions: 6, targetClass: "5A" },
  //   { teacher: "PSS", subject: "SS", sessions: 6, targetClass: "5A" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "5A" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "5A" },
  //   { teacher: "PSS", subject: "CCA", sessions: 2, targetClass: "5A" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "5A" },
  //   { teacher: "BRK", subject: "MATH", sessions: 6, targetClass: "5A" },
  //   { teacher: "NR", subject: "VE", sessions: 1, targetClass: "5A" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "5A" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "5A" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "5A" },
  //   { teacher: "NB", subject: "MA", sessions: 2, targetClass: "5B" },
  //   { teacher: "YPA", subject: "HINDI", sessions: 6, targetClass: "5B" },
  //   { teacher: "DZA", subject: "ENG", sessions: 6, targetClass: "5B" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "5B" },
  //   { teacher: "NB", subject: "SCI", sessions: 6, targetClass: "5B" },
  //   { teacher: "SPB", subject: "SS", sessions: 6, targetClass: "5B" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "5B" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "5B" },
  //   { teacher: "NB", subject: "CCA", sessions: 2, targetClass: "5B" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "5B" },
  //   { teacher: "BRK", subject: "MATH", sessions: 6, targetClass: "5B" },
  //   { teacher: "NR", subject: "VE", sessions: 1, targetClass: "5B" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "5B" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "5B" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "5B" },
  //   { teacher: "SPB", subject: "MA", sessions: 2, targetClass: "5C" },
  //   { teacher: "PY", subject: "HINDI", sessions: 6, targetClass: "5C" },
  //   { teacher: "QI", subject: "ENG", sessions: 6, targetClass: "5C" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "5C" },
  //   { teacher: "NB", subject: "SCI", sessions: 6, targetClass: "5C" },
  //   { teacher: "SPB", subject: "SS", sessions: 6, targetClass: "5C" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "5C" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "5C" },
  //   { teacher: "SPB", subject: "CCA", sessions: 2, targetClass: "5C" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "5C" },
  //   { teacher: "BRK", subject: "MATH", sessions: 6, targetClass: "5C" },
  //   { teacher: "NR", subject: "VE", sessions: 1, targetClass: "5C" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "5C" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "5C" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "5C" },
  //   { teacher: "BRK", subject: "MA", sessions: 2, targetClass: "5D" },
  //   { teacher: "PY", subject: "HINDI", sessions: 6, targetClass: "5D" },
  //   { teacher: "QI", subject: "ENG", sessions: 6, targetClass: "5D" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "5D" },
  //   { teacher: "NB", subject: "SCI", sessions: 6, targetClass: "5D" },
  //   { teacher: "PSS", subject: "SS", sessions: 6, targetClass: "5D" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "5D" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "5D" },
  //   { teacher: "BRK", subject: "CCA", sessions: 2, targetClass: "5D" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "5D" },
  //   { teacher: "BRK", subject: "MATH", sessions: 6, targetClass: "5D" },
  //   { teacher: "APA", subject: "VE", sessions: 1, targetClass: "5D" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "5D" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "5D" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "5D" },
  //   { teacher: "QI", subject: "MA", sessions: 2, targetClass: "5E" },
  //   { teacher: "YPA", subject: "HINDI", sessions: 6, targetClass: "5E" },
  //   { teacher: "QI", subject: "ENG", sessions: 6, targetClass: "5E" },
  //   { teacher: "DSU", subject: "COMP", sessions: 2, targetClass: "5E" },
  //   { teacher: "SPB", subject: "SCI", sessions: 6, targetClass: "5E" },
  //   { teacher: "PSS", subject: "SS", sessions: 6, targetClass: "5E" },
  //   { teacher: "TVV", subject: "MUS", sessions: 2, targetClass: "5E" },
  //   { teacher: "JN", subject: "MUS", sessions: 1, targetClass: "5E" },
  //   { teacher: "QI", subject: "CCA", sessions: 2, targetClass: "5E" },
  //   { teacher: "CS", subject: "MAR", sessions: 1, targetClass: "5E" },
  //   { teacher: "BRK", subject: "MATH", sessions: 6, targetClass: "5E" },
  //   { teacher: "PSS", subject: "VE", sessions: 1, targetClass: "5E" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "5E" },
  //   { teacher: "ISY", subject: "PE", sessions: 2, targetClass: "5E" },
  //   { teacher: "ISY", subject: "LIB", sessions: 1, targetClass: "5E" },
  // ]);

  // const [functionCalls, setFunctionCalls] = useState([
  //   { teacher: "PJA", subject: "Eng", sessions: 8, targetClass: "6A" },
  //   { teacher: "PJA", subject: "CCA", sessions: 3, targetClass: "6A" },
  //   { teacher: "KLM", subject: "Math", sessions: 8, targetClass: "6A" },
  //   { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "6A" },
  //   { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "6A" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6A" },
  //   { teacher: "PP", subject: "HINDI", sessions: 7, targetClass: "6A" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "6A" },
  //   { teacher: "JMB", subject: "OPT", sessions: 4, targetClass: "6A" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6A" },
  //   { teacher: "PS", subject: "ART", sessions: 2, targetClass: "6A" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6A" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6A" },
  //   { teacher: "PJA", subject: "ENG", sessions: 8, targetClass: "6B" },
  //   { teacher: "PP", subject: "CCA", sessions: 3, targetClass: "6B" },
  //   { teacher: "MK", subject: "MATH", sessions: 8, targetClass: "6B" },
  //   { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "6B" },
  //   { teacher: "SSN", subject: "SCI", sessions: 6, targetClass: "6B" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 3, targetClass: "6B" },
  //   { teacher: "PP", subject: "HINDI", sessions: 7, targetClass: "6B" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "6B" },
  //   { teacher: "MA", subject: "OPT", sessions: 4, targetClass: "6B" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6B" },
  //   { teacher: "PS", subject: "ART", sessions: 2, targetClass: "6B" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6B" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6B" },
  //   { teacher: "PJA", subject: "ENG", sessions: 8, targetClass: "6C" },
  //   { teacher: "LSP", subject: "CCA", sessions: 3, targetClass: "6C" },
  //   { teacher: "MK", subject: "MATH", sessions: 8, targetClass: "6C" },
  //   { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "6C" },
  //   { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "6C" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6C" },
  //   { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "6C" },
  //   { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "6C" },
  //   { teacher: "SAR", subject: "OPT", sessions: 4, targetClass: "6C" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6C" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "6C" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6C" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6C" },
  //   { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "6D" },
  //   { teacher: "SSN", subject: "CCA", sessions: 3, targetClass: "6D" },
  //   { teacher: "RMC", subject: "MATH", sessions: 7, targetClass: "6D" },
  //   { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "6D" },
  //   { teacher: "SSN", subject: "SCI", sessions: 7, targetClass: "6D" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6D" },
  //   { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "6D" },
  //   { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "6D" },
  //   { teacher: "PJB", subject: "OPT", sessions: 4, targetClass: "6D" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6D" },
  //   { teacher: "PS", subject: "ART", sessions: 2, targetClass: "6D" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6D" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6D" },
  //   { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "6E" },
  //   { teacher: "PAS", subject: "CCA", sessions: 3, targetClass: "6E" },
  //   { teacher: "RMC", subject: "MATH", sessions: 8, targetClass: "6E" },
  //   { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "6E" },
  //   { teacher: "SSN", subject: "SCI", sessions: 8, targetClass: "6E" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6E" },
  //   { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "6E" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "6E" },
  //   { teacher: "GSGS", subject: "OPT", sessions: 4, targetClass: "6E" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6E" },
  //   { teacher: "PS", subject: "ART", sessions: 1, targetClass: "6E" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6E" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6E" },
  //   { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "7A" },
  //   { teacher: "KR", subject: "CCA", sessions: 3, targetClass: "7A" },
  //   { teacher: "RMC", subject: "MATH", sessions: 8, targetClass: "7A" },
  //   { teacher: "GSS", subject: "SS", sessions: 5, targetClass: "7A" },
  //   { teacher: "TSP", subject: "SS", sessions: 2, targetClass: "7A" },
  //   { teacher: "SSN", subject: "SCI", sessions: 7, targetClass: "7A" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 3, targetClass: "7A" },
  //   { teacher: "JJ", subject: "HINDI", sessions: 6, targetClass: "7A" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7A" },
  //   { teacher: "PJB", subject: "OPT", sessions: 4, targetClass: "7A" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7A" },
  //   { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7A" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 2, targetClass: "7A" },
  //   { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7A" },
  //   { teacher: "PJA", subject: "ENG", sessions: 8, targetClass: "7B" },
  //   { teacher: "MK", subject: "CCA", sessions: 3, targetClass: "7B" },
  //   { teacher: "MK", subject: "MATH", sessions: 8, targetClass: "7B" },
  //   { teacher: "GSS", subject: "SS", sessions: 8, targetClass: "7B" },
  //   { teacher: "SSN", subject: "SCI", sessions: 7, targetClass: "7B" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7B" },
  //   { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "7B" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7B" },
  //   { teacher: "SAR", subject: "OPT", sessions: 4, targetClass: "7B" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7B" },
  //   { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7B" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7B" },
  //   { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7B" },
  //   { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "7C" },
  //   { teacher: "KMP", subject: "CCA", sessions: 3, targetClass: "7C" },
  //   { teacher: "KMP", subject: "MATH", sessions: 8, targetClass: "7C" },
  //   { teacher: "GSS", subject: "SS", sessions: 8, targetClass: "7C" },
  //   { teacher: "SDO", subject: "SCI", sessions: 7, targetClass: "7C" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7C" },
  //   { teacher: "PP", subject: "HINDI", sessions: 7, targetClass: "7C" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7C" },
  //   { teacher: "DSA", subject: "OPT", sessions: 4, targetClass: "7C" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7C" },
  //   { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7C" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7C" },
  //   { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7C" },
  //   { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "7D" },
  //   { teacher: "RMC", subject: "CCA", sessions: 3, targetClass: "7D" },
  //   { teacher: "RMC", subject: "MATH", sessions: 8, targetClass: "7D" },
  //   { teacher: "BN", subject: "SS", sessions: 8, targetClass: "7D" },
  //   { teacher: "SDO", subject: "SCI", sessions: 6, targetClass: "7D" },
  //   { teacher: "JDP", subject: "SCI", sessions: 1, targetClass: "7D" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7D" },
  //   { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "7D" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7D" },
  //   { teacher: "GSGS", subject: "OPT", sessions: 4, targetClass: "7D" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7D" },
  //   { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "7D" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7D" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "7D" },
  //   { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "7E" },
  //   { teacher: "BSL", subject: "CCA", sessions: 3, targetClass: "7E" },
  //   { teacher: "KMP", subject: "MATH", sessions: 8, targetClass: "7E" },
  //   { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "7E" },
  //   { teacher: "SDO", subject: "SCI", sessions: 7, targetClass: "7E" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7E" },
  //   { teacher: "RV", subject: "HINDI", sessions: 7, targetClass: "7E" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7E" },
  //   { teacher: "MA", subject: "OPT", sessions: 4, targetClass: "7E" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7E" },
  //   { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7E" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7E" },
  //   { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7E" },
  //   { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "8A" },
  //   { teacher: "JJ", subject: "CCA", sessions: 3, targetClass: "8A" },
  //   { teacher: "KMP", subject: "MATH", sessions: 7, targetClass: "8A" },
  //   { teacher: "SSR", subject: "SS", sessions: 8, targetClass: "8A" },
  //   { teacher: "LSP", subject: "SCI", sessions: 6, targetClass: "8A" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 3, targetClass: "8A" },
  //   { teacher: "RV", subject: "HINDI", sessions: 7, targetClass: "8A" },
  //   { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "8A" },
  //   { teacher: "GSGS", subject: "OPT", sessions: 4, targetClass: "8A" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8A" },
  //   { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "8A" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8A" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8A" },
  //   { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "8B" },
  //   { teacher: "BN", subject: "CCA", sessions: 3, targetClass: "8B" },
  //   { teacher: "KMP", subject: "MATH", sessions: 8, targetClass: "8B" },
  //   { teacher: "BN", subject: "SS", sessions: 8, targetClass: "8B" },
  //   { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "8B" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8B" },
  //   { teacher: "RV", subject: "HINDI", sessions: 7, targetClass: "8B" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "8B" },
  //   { teacher: "PJB", subject: "OPT", sessions: 4, targetClass: "8B" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8B" },
  //   { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "8B" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8B" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8B" },
  //   { teacher: "FVB", subject: "ENG", sessions: 8, targetClass: "8C" },
  //   { teacher: "FVB", subject: "CCA", sessions: 3, targetClass: "8C" },
  //   { teacher: "MK", subject: "MATH", sessions: 7, targetClass: "8C" },
  //   { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "8C" },
  //   { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "8C" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8C" },
  //   { teacher: "SVS", subject: "HINDI", sessions: 7, targetClass: "8C" },
  //   { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "8C" },
  //   { teacher: "JMB", subject: "OPT", sessions: 4, targetClass: "8C" },
  //   { teacher: "SD", subject: "LIB", sessions: 1, targetClass: "8C" },
  //   { teacher: "PKR", subject: "ART", sessions: 1, targetClass: "8C" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8C" },
  //   { teacher: "JN", subject: "MUSIC", sessions: 1, targetClass: "8C" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8C" },
  //   { teacher: "FVB", subject: "ENG", sessions: 8, targetClass: "8D" },
  //   { teacher: "GSS", subject: "CCA", sessions: 3, targetClass: "8D" },
  //   { teacher: "DP", subject: "MATH", sessions: 8, targetClass: "8D" },
  //   { teacher: "GSS", subject: "SS", sessions: 8, targetClass: "8D" },
  //   { teacher: "KS", subject: "SCI", sessions: 7, targetClass: "8D" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8D" },
  //   { teacher: "SVS", subject: "HINDI", sessions: 7, targetClass: "8D" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "8D" },
  //   { teacher: "DSA", subject: "OPT", sessions: 4, targetClass: "8D" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8D" },
  //   { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "8D" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 2, targetClass: "8D" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8D" },
  //   { teacher: "FVB", subject: "ENG", sessions: 8, targetClass: "8E" },
  //   { teacher: "SDO", subject: "CCA", sessions: 3, targetClass: "8E" },
  //   { teacher: "DP", subject: "MATH", sessions: 8, targetClass: "8E" },
  //   { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "8E" },
  //   { teacher: "SDO", subject: "SCI", sessions: 7, targetClass: "8E" },
  //   { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8E" },
  //   { teacher: "SVS", subject: "HINDI", sessions: 7, targetClass: "8E" },
  //   { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "8E" },
  //   { teacher: "MA", subject: "OPT", sessions: 4, targetClass: "8E" },
  //   { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8E" },
  //   { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "8E" },
  //   { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8E" },
  //   { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8E" },

  // ]);

  const [functionCalls, setFunctionCalls] = useState([]);

  const [infoModal, setInfoModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  console.log(functionCalls);

  function calc() {
    function initializeTimetable(daysOfWeek, classes, numberOfPeriods) {
      const timetable = [];

      for (let dayIndex = 0; dayIndex < daysOfWeek; dayIndex++) {
        const dayObject = { day: getDayName(dayIndex), classes: {} };

        for (let classIndex = 0; classIndex < classes.length; classIndex++) {
          const className = classes[classIndex];
          const classArray = Array.from({ length: numberOfPeriods }, () => ({
            teacher: "",
            subject: "",
          }));
          dayObject.classes[className] = classArray;
        }

        timetable.push(dayObject);
      }

      return timetable;
    }

    function printTimetable(timetable) {
      const totalDays = timetable.length;
      const periodsPerDay =
        timetable[0].classes[Object.keys(timetable[0].classes)[0]].length;

      for (const className in timetable[0].classes) {
        console.log(`Timetable for Class ${className}:`);

        let headerRow = "       |";
        for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
          headerRow += `  ${timetable[dayIndex].day}  \t \t  |`;
        }
        console.log(headerRow);

        let separatorLine = "-------------------";
        for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
          separatorLine += "--------------------";
        }
        console.log(separatorLine);

        for (let periodIndex = 0; periodIndex < periodsPerDay; periodIndex++) {
          let row = `Period ${periodIndex + 1} |`;
          for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
            const day = timetable[dayIndex];
            const classArray = day.classes[className];
            const cell = classArray[periodIndex];
            row += `  ${
              cell.teacher ? `${cell.teacher}|${cell.subject}` : " - "
            }  |`;
          }
          console.log(row);
          console.log(separatorLine);
        }
        console.log("\n");

        const lecturesCount = {};
        for (const day of timetable) {
          const classArray = day.classes[className];
          for (const cell of classArray) {
            if (cell.teacher) {
              const key = `${cell.teacher} - ${cell.subject}`;
              if (lecturesCount[key]) {
                lecturesCount[key]++;
              } else {
                lecturesCount[key] = 1;
              }
            }
          }
        }
        let tot = 0;
        console.log(
          `Number of Lectures per Teacher and Subject for Class ${className}:`
        );
        for (const key in lecturesCount) {
          const [teacher, subject] = key.split(" - ");
          console.log(
            `${teacher}: ${subject} - ${lecturesCount[key]} lectures`
          );
          tot += lecturesCount[key];
        }
        console.log(tot + "\n");
      }
    }

    function getDayName(dayIndex) {
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      return days[dayIndex];
    }

    function placeTeacherInTimetable(
      timetable,
      teacher,
      subject,
      sessionsPerWeek,
      targetClass
    ) {
      const totalDays = timetable.length;
      const periodsPerDay =
        timetable[0].classes[Object.keys(timetable[0].classes)[0]].length;

      let sessionsRemaining = sessionsPerWeek;
      let maxIterations = 1000;

      for (
        let dayIndex = 0;
        sessionsRemaining > 0 && maxIterations > 0;
        dayIndex++
      ) {
        const day = timetable[dayIndex % totalDays];
        for (const className in day.classes) {
          const classArray = day.classes[className];
          if (className === targetClass) {
            for (let i = 0; i < periodsPerDay && sessionsRemaining > 0; i++) {
              if (
                !classArray[i].teacher &&
                !hasCollision(timetable, className, i, teacher, dayIndex)
              ) {
                classArray[i].teacher = teacher;
                classArray[i].subject = subject;
                sessionsRemaining--;
                break;
              }
            }
          }
        }
        maxIterations--;
      }
      if (maxIterations === 0 && sessionsRemaining > 0) {
        // console.log(targetClass + " " + teacher + " " + sessionsRemaining);
        let f = 1;
        for (let index = 0; index < sessionsRemaining; index++) {
          const result = handleHangSessions(timetable, {
            teacher,
            subject,
            sessions: 1,
            targetClass,
          });
          if (result) continue;
          else {
            f = 0;
            break;
          }
        }
        if (f === 1) return true;
        else return false;
      } else return true;
    }

    function handleHangSessions(timetable, unplacedSession) {
      for (let dayIndex = 0; dayIndex < timetable.length; dayIndex++) {
        const day = timetable[dayIndex];
        for (const className in day.classes) {
          const classArray = day.classes[className];
          for (
            let periodIndex = 0;
            periodIndex < classArray.length;
            periodIndex++
          ) {
            if (!classArray[periodIndex].teacher) {
              if (
                !hasCollision(
                  timetable,
                  className,
                  periodIndex,
                  unplacedSession.teacher,
                  dayIndex
                )
              ) {
                const tempTeacher = classArray[periodIndex].teacher;
                const tempSubject = classArray[periodIndex].subject;

                classArray[periodIndex].teacher = unplacedSession.teacher;
                classArray[periodIndex].subject = unplacedSession.subject;

                unplacedSession.teacher = tempTeacher;
                unplacedSession.subject = tempSubject;

                return true;
              }
            }
          }
        }
      }
      return false;
    }

    function hasCollision(
      timetable,
      className,
      periodIndex,
      teacher,
      dayIndex
    ) {
      const day = timetable[dayIndex % timetable.length];
      try {
        for (const otherClassName in day?.classes) {
          if (otherClassName !== className) {
            const classArray = day.classes[otherClassName];

            if (classArray[periodIndex].teacher === teacher) {
              return true;
            }
          }
        }

        return false;
      } catch (e) {
        console.log(e);
      }
    }

    let timetable = initializeTimetable(days, classes, periods);

    // let timetable = initializeTimetable(
    //   5,
    //   [
    //     "3A",
    //     "3B",
    //     "3C",
    //     "3D",
    //     "3E",
    //     "4A",
    //     "4B",
    //     "4C",
    //     "4D",
    //     "4E",
    //     "5A",
    //     "5B",
    //     "5C",
    //     "5D",
    //     "5E",
    //   ],
    //   9
    // );

    // let timetable = initializeTimetable(
    //   6,
    //   [
    //     "6A",
    //     "6B",
    //     "6C",
    //     "6D",
    //     "6E",
    //     "7A",
    //     "7B",
    //     "7C",
    //     "7D",
    //     "7E",
    //     "8A",
    //     "8B",
    //     "8C",
    //     "8D",
    //     "8E",
    //   ],
    //   9
    // );

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function breakDownAllSessions(functionCalls) {
      const allEntries = [];

      functionCalls.forEach((call) => {
        const { teacher, subject, sessions, targetClass } = call;
        let remainingSessions = sessions;
        while (remainingSessions > 0) {
          const sessionsForEntry = Math.min(
            remainingSessions,
            1 + Math.floor(Math.random() * 4)
          );
          allEntries.push({
            teacher,
            subject,
            sessions: sessionsForEntry,
            targetClass,
          });
          remainingSessions -= sessionsForEntry;
        }
      });

      return allEntries;
    }

    let count = 0;

    while (true) {
      const allEntries = breakDownAllSessions(functionCalls);

      const moreSession = allEntries.filter((call) => call.sessions >= 3);
      const lessSession = allEntries.filter((call) => call.sessions < 3);
      let f = 1;
      count++;

      shuffleArray(lessSession);
      shuffleArray(moreSession);

      const oneQuarterLessSession = lessSession.slice(
        0,
        Math.ceil(lessSession.length / 3)
      );
      const threeQuartersLessSession = lessSession.slice(
        Math.ceil(lessSession.length / 3)
      );

      const shuffledCalls = threeQuartersLessSession.concat(
        moreSession,
        oneQuarterLessSession
      );

      for (const call of shuffledCalls) {
        const success = placeTeacherInTimetable(
          timetable,
          call.teacher,
          call.subject,
          call.sessions,
          call.targetClass
        );
        if (!success) {
          f = 0;

          // timetable = initializeTimetable(
          //   6,
          //   [
          //     "6A",
          //     "6B",
          //     "6C",
          //     "6D",
          //     "6E",
          //     "7A",
          //     "7B",
          //     "7C",
          //     "7D",
          //     "7E",
          //     "8A",
          //     "8B",
          //     "8C",
          //     "8D",
          //     "8E",
          //   ],
          //   9
          // );

          // timetable = initializeTimetable(
          //   5,
          //   [
          //     "3A",
          //     "3B",
          //     "3C",
          //     "3D",
          //     "3E",
          //     "4A",
          //     "4B",
          //     "4C",
          //     "4D",
          //     "4E",
          //     "5A",
          //     "5B",
          //     "5C",
          //     "5D",
          //     "5E",
          //   ],
          //   9
          // );

          timetable = initializeTimetable(days, classes, periods);

          //  timetable = initializeTimetable(
          //   6,
          //   ["9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11C"],
          //   9
          // );
          break;
        }
      }
      if (f === 1) {
        console.log("Timetable created successfully!");
        printTimetable(timetable);
        setData(timetable);
        console.log(count);
        break;
      }
    }
  }

  return (
    <div className="main-content">
      <div className="main-title">
      Effortlessly create schedules for
      </div>
      <div className="main-title">
      classes and teachers.
      </div>

      <div className="main-button">
        <InitialModal
          setName={setName}
          setDays={setDays}
          setYear={setYear}
          setPeriods={setPeriods}
          setInfoModal={setInfoModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        {functionCalls.length > 0 && (
          <Button
            style={{
              backgroundColor: "#DCEAFB",
              borderRadius: "99px",
              height: "50px",
              width: "180px",
              fontSize: "18px",
              border: "2px",
              color: "black",
              fontWeight: "600",
            }}
            onClick={calc}
            className="generate"
            type="primary"
            disabled={periods === null || days === null}
          >
            Generate
          </Button>
        )}
      </div>
      {infoModal && (
        <InfoModal
          infoModal={infoModal}
          setInfoModal={setInfoModal}
          functionCalls={functionCalls}
          setFunctionCalls={setFunctionCalls}
          classes={classes}
          setClasses={setClasses}
          subjects={subjects}
          setSubjects={setSubjects}
          teachers={teachers}
          setTeachers={setTeachers}
        />
      )}

      <ScheduleTable data={data} periods={periods} days={days} />
    </div>
  );
};
export default Schedule;
