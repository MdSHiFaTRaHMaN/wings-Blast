import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const API = axios.create({
  baseURL: "https://wings-blast-backend.onrender.com/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Flavor 
export const useFlavor = () => {
  const getFlavor = async () => {
    try {
      const response = await API.get("/flavor/all");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching flavor:", error);
      throw error;
    }
  };

  const [flavor, setFlavor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlavor = async () => {
      try {
        const flavorData = await getFlavor();
        setFlavor(flavorData);
      } catch (error) {
        setError("Failed to fetch flavor.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlavor();
  }, []);

  return { flavor, loading, error };
};

// food Details 
export const useFoodDetails = () => {
  const getFoodDetails = async () => {
    try {
      const response = await API.get("/food-details/3");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching Food Details:", error);
      throw error;
    }
  };

  const [foodDetails, setFoodDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const detailsData = await getFoodDetails();
        setFoodDetails(detailsData);
      } catch (error) {
        setError("Failed to fetch flavor.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, []);

  return { foodDetails, loading, error };
}

// get user
export const useUserProfile = () => {
  const getUser = async () => {
    const response = await API.get("/user/me");
    return response.data;
  };

  const {
    data: user = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { user, isLoading, isError, error, refetch};
};

// sign out
export const signOutUser = () => {
  localStorage.removeItem("token");
  window.location.href = "/signin";
};



// get project
export const useSingleProjects = (projectID) => {
  const getProject = async () => {
    try {
      const response = await API.get(`/project/single/${projectID}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };

  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProject();
        setProject(projectData);
      } catch (error) {
        setError("Failed to fetch project.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectID]);

  return { project, loading, error };
};
