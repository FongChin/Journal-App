class PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    if @post.save
      render :json => @post
    else
      render :json => { :errors => @post.errors.full_messages }, :status => 422
    end
  end

  def index
    @posts = Post.all
    render :json => @posts
  end

  def destroy
    Post.find(params[:id]).destroy
    head 200
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :json => @post
    else
      render :json => {:error => "The post id doesn't exist yo!"}
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      render :json => @post
    else
      render :json => { :errors => @post.errors.full_messages }, :status => 422
    end
  end
end
