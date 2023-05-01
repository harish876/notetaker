import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Header(): JSX.Element {
  const session = useSession();
  const { data: sessionData } = session;
  console.log(sessionData);
  return (
    <div className="navbar justify-around bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">T3 Note Taker App</a>
      </div>
      <div className="flex-none">
        <div className="flex flex-row justify-end space-x-3 mt-2">
          <label className="btn-ghost btn-circle avatar btn">
            {sessionData && (
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            )}
          </label>
          {!sessionData && (
            <div>
              <button
                className="btn-primary btn"
                onClick={() => {
                  void signIn();
                }}
              >
                Login
              </button>
            </div>
          )}
          <button
            className="btn-primary btn"
            onClick={() => {
              void signOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
