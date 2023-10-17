import React from "react";

function Menu() {
  return (
    <div className="Header-center">
      <table>
        <tr>
          <td style={{width:"70px"}}>
            <img src="favicon.ico" style={{width:"20px", height:"20px"}}/>
          </td>

          <td>
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Classifieds
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Menu;
