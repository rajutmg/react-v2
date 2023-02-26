import React from "react";
import Header from "../../components/header";
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {
  return (
    <>
      <Header />
      <section className="secGap">
        <Grid centered>
          <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
            <SemanticHeader>Login to your account</SemanticHeader>
            <Segment>
              <Form>
                {error && <Message content={error?.detail} negative />}
                <Form.Field>
                  <Form.Input
                    value={form.email || ""}
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    label="Email"
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.password || ""}
                    onChange={onChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    label="Password"
                  />
                </Form.Field>

                <Button
                  onClick={onSubmit}
                  disabled={loginFormValid || loading}
                  fluid
                  loading={loading}
                  primary
                  type="submit"
                >
                  Submit
                </Button>
              </Form>

              <Segment>
                Already have an account?
                <Link to="/auth/Register">Register</Link>.
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </section>
    </>
  );
};

export default LoginUI;
