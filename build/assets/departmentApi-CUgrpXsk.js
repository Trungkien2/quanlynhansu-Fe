import{a as t,R as s}from"./axiosClient-DO8HkJzh.js";import{c}from"./index-BWBikUGW.js";const i=async a=>await t.get(s.DEPARTMENT,{params:c(a)}),E=async(a,e)=>await t.get(`${s.DEPARTMENT}/${a}`,{params:c(e)}),T=async a=>await t.post(`${s.DEPARTMENT}`,a),r=async(a,e)=>await t.put(`${s.DEPARTMENT}/${a}`,e),m=async a=>await t.delete(`${s.DEPARTMENT}/${a}`);export{m as D,E as a,T as c,r as e,i as g};