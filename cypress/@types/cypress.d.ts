declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new issue in a project using the GitLab API with the provided issue details.
     *
     * This command first creates a new project using the `cy.api_createProject()` command, and then sends a POST request to create a new issue within that project.
     *
     * @param {object} issue - The issue details.
     * @param {object} issue.project - The project details.
     * @param {string} issue.project.name - The name of the project.
     * @param {string} issue.title - The title of the issue.
     * @param {string} issue.description - The description of the issue.
     * @returns {Chainable<Response>} The Cypress chainable containing the API response.
     * @example
     * cy.api_createIssue({
     *   project: {
     *     name: 'my-project'
     *   },
     *   title: 'New Issue',
     *   description: 'This is a sample issue.'
     * }).then((response) => {
     *   // Process the response
     * });
     */
    api_createIssue(issue: {
      project: { name: string };
      title: string;
      description: string;
    }): Chainable<Response<any>>;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new label for a project using the GitLab API with the provided details.
     *
     * @param {string} projectId - The ID of the project.
     * @param {object} label - The label details.
     * @param {string} label.name - The name of the label.
     * @param {string} label.color - The color of the label.
     * @example
     * cy.api_createLabel('project-id', {
     *   name: 'My Label',
     *   color: '#ff0000'
     * });
     */
    api_createLabel(
      projectId: string,
      label: { name: string; color: string },
    ): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new project using the GitLab API with the provided project details.
     *
     * @param {object} project - The project details.
     * @param {string} project.name - The name of the project.
     * @param {string} project.description - The description of the project.
     * @example
     * cy.api_createProject({
     *   name: 'My Project',
     *   description: 'This is a sample project.',
     * });
     */
    api_createProject(project: { name: string; description: string }): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Deletes all projects using the GitLab API.
     *
     * This command retrieves all projects using the `cy.api_getAllProjects()` command, and then sends a DELETE request to delete each project.
     *
     * @example
     * cy.api_deleteProjects();
     */
    api_deleteProjects(): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Retrieves all projects using the GitLab API.
     *
     * @returns {Chainable<Response>} The Cypress chainable containing the API response.
     * @example
     * cy.api_getAllProjects().then((response) => {
     *   // Process the response
     * });
     */
    api_getAllProjects(): Chainable<Response<any>>;
  }
}

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
     * Sets a label on an issue in the GUI using the provided label details.
     *
     * @param {object} label - The label details.
     * @param {string} label.name - The name of the label to set.
     * @example
     * cy.gui_setLabelOnIssue({ name: 'Bug' });
     */
    gui_setLabelOnIssue(label: { name: string }): void;
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
