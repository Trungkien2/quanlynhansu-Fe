import{a as t,R as s}from"./axiosClient-BIXGjfOH.js";import{c}from"./index-BWBikUGW.js";const i=async a=>await t.get(s.USER,{params:c(a)}),r=async(a,e)=>await t.get(`${s.USER}/${a}`,{params:c(e)}),m=async a=>await t.post(`${s.USER}`,a),p=async(a,e)=>await t.put(`${s.USER}/${a}`,e),R=async a=>await t.delete(`${s.USER}/${a}`);export{R as D,r as a,m as c,p as e,i as g};
