import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-light: #0000b3;
  /* Primary Color */
  --primary: #0000b3;
  --point: #ff293b;
  --primary-dark: #0000b3;
  --border: 1px solid #ff293b;
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
}

/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

a:hover {
  cursor: pointer;
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
        color: var(--primary);
      }
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

.title {
    font-family: "Pretendard";
    font-weight: 600
}

.card {
  height: var(--card-height);
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}

.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
}

@media screen and (min-width: 800px) {
  .link-icons {
      font-size: 5rem;
  }
  .form-group {
      max-width: 750px;
  }
}

@media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
}
`;

export default GlobalStyles;
