import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const GradesTable = ({ list }) => {
  const [itemTitle, setItemTitle] = useState({});
  const [listGrouping, setListGrouping] = useState({});

  useEffect(() => {
    setItemTitle(list ? list[0] : null);
    setListGrouping(list ? list[1] : null);
  }, [list, listGrouping]);

  return (
    <>
      <Table className="mt-4">
        {list && listGrouping && (
          <thead>
            <tr style={{ fontSize: "16px", color: "#777" }}>
              <th style={{ color: "#777", width: "200px" }}>No.</th>
              {listGrouping["t1item120"] !== "null" && (
                <th style={{ color: "#777", width: "200px" }}>
                  {list[0]?.t1item120}
                </th>
              )}
              {listGrouping["t1item130"] !== "null" && (
                <th style={{ color: "#777", width: "200px" }}>
                  {list[0]?.t1item130}
                </th>
              )}
              {listGrouping["t1item140"] !== "null" && (
                <th style={{ color: "#777", width: "200px" }}>
                  {list[0]?.t1item140}
                </th>
              )}
              {listGrouping["t1item150"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item150}</th>
              )}
              {listGrouping["t1item160"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item160}</th>
              )}
              {listGrouping["t1item170"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item170}</th>
              )}
              {listGrouping["t1item180"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item180}</th>
              )}
              {listGrouping["t1item190"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item190}</th>
              )}
              {listGrouping["t1item200"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item200}</th>
              )}
              {listGrouping["t1item210"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item210}</th>
              )}
              {listGrouping["t1item220"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item220}</th>
              )}
              {listGrouping["t1item230"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item230}</th>
              )}
              {listGrouping["t1item240"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item240}</th>
              )}
              {listGrouping["t1item250"] !== "null" && (
                <th style={{ color: "#777" }}>{list[0]?.t1item250}</th>
              )}
            </tr>
          </thead>
        )}
        {list &&
          listGrouping &&
          list.slice(2).map(
            (filteredData, index) =>
              filteredData && (
                <tbody>
                  {filteredData?.t1key112 === "Y" && (
                    <tr style={{ fontSize: "15px" }}>
                      <td>{index + 1}</td>
                      {listGrouping["t1item120"] !== "null" && (
                        <td>{filteredData?.t1item120}</td>
                      )}
                      {listGrouping["t1item130"] !== "null" && (
                        <td>{filteredData?.t1item130}</td>
                      )}
                      {listGrouping["t1item140"] !== "null" && (
                        <td style={{ width: "100px !important" }}>
                          {filteredData?.t1item140}
                        </td>
                      )}
                      {listGrouping["t1item150"] !== "null" && (
                        <td>{filteredData?.t1item150}</td>
                      )}
                      {listGrouping["t1item160"] !== "null" && (
                        <td>{filteredData?.t1item160}</td>
                      )}
                      {listGrouping["t1item170"] !== "null" && (
                        <td>{filteredData?.t1item170}</td>
                      )}
                      {listGrouping["t1item180"] !== "null" && (
                        <td>{filteredData?.t1item180}</td>
                      )}
                      {listGrouping["t1item190"] !== "null" && (
                        <td>{filteredData?.t1item190}</td>
                      )}
                      {listGrouping["t1item200"] !== "null" && (
                        <td style={{ color: "#777" }}>
                          {filteredData?.t1item200}
                        </td>
                      )}
                      {listGrouping["t1item210"] !== "null" && (
                        <td>{filteredData?.t1item210}</td>
                      )}
                      {listGrouping["t1item220"] !== "null" && (
                        <td>{filteredData?.t1item220}</td>
                      )}
                      {listGrouping["t1item230"] !== "null" && (
                        <td>{filteredData?.t1item230}</td>
                      )}
                      {listGrouping["t1item240"] !== "null" && (
                        <td>{filteredData?.t1item240}</td>
                      )}
                      {listGrouping["t1item250"] !== "null" && (
                        <td>{filteredData?.t1item250}</td>
                      )}
                    </tr>
                  )}
                </tbody>
              )
          )}
      </Table>
    </>
  );
};

export default GradesTable;
