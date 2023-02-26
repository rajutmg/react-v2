import React from "react";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {
  return (
    <div>
      <Header />
<<<<<<< HEAD
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
=======

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Login to your account</SemanticHeader>

          <Segment>
            <Form>
              {error && <Message content={error?.detail} negative />}
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
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

              <Segment>
                Need an account <Link to="/auth/register">Register</Link>.
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae
  );
};

export default LoginUI;
