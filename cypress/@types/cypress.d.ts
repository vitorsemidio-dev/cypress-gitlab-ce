declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new issue in the web application using the provided issue details.
     *
     * @param {object} issue - The issue details.
     * @param {object} issue.project - The project details.
     * @param {string} issue.project.name - The name of the project.
     * @param {string} issue.title - The title of the issue.
     * @param {string} issue.description - The description of the issue.
     * @example
     * cy.gui_createIssue({
     *   project: {
     *     name: 'my-project'
     *   },
     *   title: 'New Issue',
     *   description: 'This is a sample issue.'
     * });
     */
    gui_createIssue(issue: {
      project: { name: string };
      title: string;
      description: string;
    }): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new project in the web application using the provided project details.
     *
     * @param {object} project - The project details.
     * @param {string} project.name - The name of the project.
     * @param {string} project.description - The description of the project.
     * @example
     * cy.gui_createProject({
     *   name: 'My Project',
     *   description: 'This is a sample project.'
     * });
     */
    gui_createProject(project: { name: string; description: string }): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Logs in to the web application using the provided credentials or the default values from environment variables.
     *
     * @param {string} [user] - The username for login. If not provided, the value from the 'user_name' environment variable will be used.
     * @param {string} [password] - The password for login. If not provided, the value from the 'user_password' environment variable will be used.
     * @param {object} [options] - Additional options for login.
     * @param {boolean} [options.cacheSession=true] - Specifies whether to cache the session across Cypress specs. Default is `true`.
     * @example
     * cy.login('my-username', 'my-password');
     * cy.login(); // Uses default values from environment variables
     * cy.login('my-username', 'my-password', { cacheSession: false }); // Does not cache the session
     */
    login(
      user?: string,
      password?: string,
      options?: { cacheSession?: boolean },
    ): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Logs out from the web application.
     *
     * This command triggers the logout process by clicking on the user avatar and selecting the "Sign out" option.
     *
     * @example
     * cy.logout();
     */
    logout(): void;
  }
}
