import React from 'react';
export type GreetingProps = { userName: string }; /* could also use interface */
export const Greeting = ({ userName }: GreetingProps) => <div>{userName}</div>;
