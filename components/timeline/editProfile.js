"use client";
import React from "react";
import TimelineEditInfo from './timelineEditInfo';
import TimelineEditWork from './timelineEditWork';
import TimelineEditInterests from './timelineEditInterests';
import TimelineEditSettings from './timelineEditSettings';
import TimelineEditPassword from './timelineEditPassword';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function EditProfile({ option }) {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const currentUser = useSelector(selectCurrentUser);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const setCurrentUserInRedux = async (profileId) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL_PRE + `/api/1.0/users/${profileId}`);

        if (!response.ok) {
          console.error("Error Fetching User: ", response.status);
        }

        if (response.ok) {
          const data = await response.json();
          dispatch(setCurrentUser(data.user));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after fetching user
      }
    };

    if (session?.user) {
      setCurrentUserInRedux(session.user.profileId);
    }
  }, [dispatch, session]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  // Render components based on selected option
  switch (option) {
    case "info":
      return <TimelineEditInfo currentUser={currentUser} />;
    case "work":
      return <TimelineEditWork currentUser={currentUser} />;
    case "interests":
      return <TimelineEditInterests currentUser={currentUser} />;
    case "settings":
      return <TimelineEditSettings currentUser={currentUser} />;
    case "password":
      return <TimelineEditPassword currentUser={currentUser} />;
    default:
      return null;
  }
}

