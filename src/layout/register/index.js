import React from "react";
import Header from "../../components/header";
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";

const RegisterUI = ({ form: { onchange, form, registerFormValid } }) => {
  return (
    <>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup Here</SemanticHeader>
          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onchange}
                  name="username"
                  placeholder="User Name"
                  label="User Name"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.firstName || ""}
                  onChange={onchange}
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.lastName || ""}
                  onChange={onchange}
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onchange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onchange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>
              <Button disabled={registerFormValid} fluid primary type="submit">
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default RegisterUI;
