import React from "react";

function MainSearch() {
  return (
    <div id="right" className={`Main-body`}>
      <table style={{marginLeft:"auto", marginRight:"auto"}}>  
        <tr >
          <td>
            <img src="iconnex-icon.gif" />
          </td>
        </tr>
        <tr>
          <td>
            <div class="form-outline">
              <input
                type="search"
                id="form1"
                class="form-control"
                placeholder="Search with E.A.S.E"
                aria-label="Search"
                style={{marginLeft:"auto", marginRight:"auto"}}
              />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className={`Main-buttons`}>
              <button
                type="button"
                class="btn btn-secondary"
                style={{ alignSelf: "flex-end", marginLeft:"auto", marginRight:"auto" }}
              >
                Go
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MainSearch;
