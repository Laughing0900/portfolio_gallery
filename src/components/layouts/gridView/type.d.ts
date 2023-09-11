type GridLayoutProps = {
  isScrolling?: boolean;
  content: {
    images: string[];
    title: string;
    description: string;
  };
};

type GridViewProps = {
  activeView?: number;
};

// todo rm activeView,isScrolling
