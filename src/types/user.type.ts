import React from 'react';

export interface IUser {
  fullname: string;
  username: string;
  thumbnail: string | React.ReactNode;
}
